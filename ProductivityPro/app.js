const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(__dirname));
const taskList = [];
app.post("/tasks", (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: "Task is required" });
    }
    taskList.push(task);
    res.status(201).json({ message: "Task added successfully" });
});
app.get("/tasks", (req, res) => {
    res.json({ tasks: taskList });
});
const todoList = [];
app.post("/todos", (req, res) => {
    const { todo } = req.body;
    if (!todo) {
        return res.status(400).json({ error: "To-Do is required" });
    }
    todoList.push(todo);
    res.status(201).json({ message: "To-Do added successfully" });
});
app.get("/todos", (req, res) => {
    res.json({ todos: todoList });
});
const reminderList = [];
app.post("/reminders", (req, res) => {
    const { reminder } = req.body;
    if (!reminder) {
        return res.status(400).json({ error: "Reminder is required" });
    }
    reminderList.push(reminder);
    res.status(201).json({ message: "Reminder added successfully" });
});
app.get("/reminders", (req, res) => {
    res.json({ reminders: reminderList });
});
const goalList = [];
app.post("/goals", (req, res) => {
    const { goal } = req.body;
    if (!goal) {
        return res.status(400).json({ error: "Goal is required" });
    }
    goalList.push(goal);
    res.status(201).json({ message: "Goal added successfully" });
});
app.get("/goals", (req, res) => {
    res.json({ goals: goalList });
});
let darkModeEnabled = false;
app.get("/darkmode", (req, res) => {
    res.json({ darkMode: darkModeEnabled });
});
app.post("/darkmode/toggle", (req, res) => {
    darkModeEnabled = !darkModeEnabled;
    res.json({ darkMode: darkModeEnabled });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});