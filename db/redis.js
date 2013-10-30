var express = require("express"),
    RedisStore = require("connect-redis")(express);

var redis_opts = require("../config/redis/" + process.env.NODE_ENV),
    redis_store = new RedisStore(redis_opts);

module.exports = redis_store;
