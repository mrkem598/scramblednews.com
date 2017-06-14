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
