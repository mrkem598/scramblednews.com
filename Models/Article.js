// Require mongoose
var mongoose = require("mongoose");
// create schema class
var Schema = mongoose.Schema;
//Create article schema
var ArticleSchema = new Schema({
title: {
  type: String,
  required: true
},
  link: {
    type: String,
    require: true
  },
  ///saves only one note's objectId, ref refers to note model
note: {
  type: Schema.Types.ObjectId,
  ref: "Note"
}
});
//create atricle model with the ArticleSchema
var Article = mongoose.model("Artivl",  ArticleSchema);
//export the model
module.exports = Article;
