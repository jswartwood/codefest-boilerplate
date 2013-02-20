var route_base = "";

function add_named_route( app, name ) {
  app.get(route_base + "/" + name, function( req, res ) {
    res.render(name);
  });
}

module.exports = function() {
  // add_named_route(this, "play");
};
