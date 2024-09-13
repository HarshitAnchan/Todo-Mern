const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String, // Add description field
  },
  status: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
  },
});

const TodoList = mongoose.model("TodoList", todoSchema);

module.exports = TodoList;
