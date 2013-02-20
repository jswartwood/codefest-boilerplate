module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: [
        "public/js/*.js",
        "public/js/controllers/*.js",
        "public/js/services/*.js",
        "public/js/directives/*.js"
      ]
    },
    min: {
      main: {
        src: [
          "public/js/lib/*.js",
          "public/js/*.js",
          "public/js/controllers/*.js",
          "public/js/services/*.js",
          "public/js/directives/*.js"
        ],
        dest: "public/js/min/main.js"
      }
    },
    watch: {
      js: {
        files: "<config:lint.all>",
        tasks: "lint min"
      }
    }
  });

  grunt.registerTask("default", "lint min watch");

};
