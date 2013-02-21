/*
 * Words
 */

 var db = require("../db/mongo"),
     WORD_EXPIRES = "365d",
     Word_Schema = db.Schema({
       text: { type: String, unique: true, trim: true /*, lowercase: true */ },
       created: { type: Date, default: Date.now /*, expires: WORD_EXPIRES */ }
     }),
     Word = db.model('Word', Word_Schema);

module.exports = Word;
