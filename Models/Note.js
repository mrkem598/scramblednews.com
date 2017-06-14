// Require mongoose
var mongoose = require("mongoose");
// create schema class
var Schema = mongoose.Schema;
// Create the note schema
var NoteSchema = New Schema({
  // just string
  title: {
    type: String
  },
  // just a string
  body: {
    type: String
  }
});
//create note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);
//export the note model
module.exports = Note;
