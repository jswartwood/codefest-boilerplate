var os = require("os");

exports.port = process.env.PORT || 3000;

exports.session_secret = "2oing2ng;9a3n2;;g9hwa;hg";
exports.session_key = "express.sid";

exports.pushover_token = "pw89GN98P23HGPHWAPHT238;HT;8OH";

exports.hostname = os.hostname();

exports.base_url = "http://" + exports.hostname + ":" + exports.port;
