var routes = [
      "user",
      "thing"
    ];

exports.configure = function( opts ) {
  config.app = opts.app;
  config.models = opts.models;
};

exports.init = function( opts ) {
  if (opts) exports.configure(opts);

  routes.forEach(function( routeName ) {
    require("./" + routeName).setup(config);
  });
};
