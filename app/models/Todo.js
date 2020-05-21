const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: String,
  completed: false,
});

module.exports = mongoose.model("todo", TodoSchema);
