const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/todoList");

var app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for database connection errors
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Get saved tasks from the database
app.get("/getTodoList", (req, res) => {
  TodoModel.find({})
    .then((todoList) => res.json(todoList))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Add new task to the database
app.post("/addTodoList", (req, res) => {
  TodoModel.create({
    task: req.body.task,
    description: req.body.description, // Include description
    status: req.body.status,
    deadline: req.body.deadline,
  })
    .then((todo) => res.status(201).json(todo))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Update task fields (including deadline and description)
app.post("/updateTodoList/:id", (req, res) => {
  const id = req.params.id;
  const updateData = {
    task: req.body.task,
    description: req.body.description, // Include description
    status: req.body.status,
    deadline: req.body.deadline,
  };
  TodoModel.findByIdAndUpdate(id, updateData, { new: true }) // Added { new: true } to return the updated document
    .then((todo) => res.json(todo))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Delete task from the database
app.delete("/deleteTodoList/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.findByIdAndDelete(id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
