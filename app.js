var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    stylus = require('stylus'),
    nib = require('nib');

var app = express(),
    store = new MemoryStore();

// Configuration
var config = require("./config/" + process.env.NODE_ENV || "development"),
    auths = require("./auths"),
    models = require("./models"),
    routes = require("./routes");

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(stylus.middleware({
    src: __dirname + "",
    dest: __dirname + '/public',
    compile: compile
  }));
  
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  
  app.use(express.cookieParser());
  app.use(express.session({
    secret: config.session_secret,
    key: config.session_key,
    store: store
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.serializeUser(function( user, done ) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function( id, done ) {
    models.User.findById(id, function( err, user ) {
      done(err, user);
    });
  });
  
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}

app.configure("development", function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure("production", function() {
  app.use(express.errorHandler());
});

// Auths
auths.configure({
  app: app,
  models: models,
  config: config,
  passport: passport
});


// Routes
routes.configure({
  app: app,
  models: models,
  config: config
});

routes.init();

module.exports = {
  app: app,
  store: store
};
