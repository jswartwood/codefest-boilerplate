exports.setup = function( config ) {
  var app = config.app,
      models = config.models;

  // Login Page
  app.get("/login", function( req, res ) {
    var user = req.user;
    if (user) {
      res.redirect("/home");
    } else {
      res.render("index", { title: "Home" });
    }
  });
};