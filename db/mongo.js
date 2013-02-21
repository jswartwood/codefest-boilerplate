var mongoose = require("mongoose");

var config = require("../config/mongo/" + (process.env.NODE_ENV || "development") + ".json");

mongoose.connect("mongodb://" + config.host + ":" + config.port + "/" + config.name, { user: config.user, pass: config.pass });

module.exports = mongoose;
