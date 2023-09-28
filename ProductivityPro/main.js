document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const toggleButton = document.getElementById("toggle-button");
    const darkModePreference = localStorage.getItem("darkMode");

    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }

    function toggleDarkMode() {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }
    toggleButton.addEventListener("click", toggleDarkMode);
    if (darkModePreference === "enabled") {
        enableDarkMode();
    }
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");

    function createTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            const deleteTaskButton = document.createElement("button");
            deleteTaskButton.textContent = "Delete";
            deleteTaskButton.classList.add("delete-button");
            taskItem.appendChild(deleteTaskButton);
            taskList.appendChild(taskItem);
            taskInput.value = "";
            deleteTaskButton.addEventListener("click", function() {
                taskList.removeChild(taskItem);
            });
        }
    }

    function addTask() {
        createTask();
    }

    function handleTaskKeyPress(event) {
        if (event.key === "Enter") {
            createTask();
        }
    }
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", handleTaskKeyPress);
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addTodoButton = document.getElementById("add-todo-button");

    function createTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = document.createElement("li");
            todoItem.textContent = todoText;
            const deleteTodoButton = document.createElement("button");
            deleteTodoButton.textContent = "Delete";
            deleteTodoButton.classList.add("delete-button");
            todoItem.appendChild(deleteTodoButton);
            todoList.appendChild(todoItem);
            todoInput.value = "";
            deleteTodoButton.addEventListener("click", function() {
                todoList.removeChild(todoItem);
            });
        }
    }

    function addTodo() {
        createTodo();
    }

    function handleTodoKeyPress(event) {
        if (event.key === "Enter") {
            createTodo();
        }
    }
    addTodoButton.addEventListener("click", addTodo);
    todoInput.addEventListener("keypress", handleTodoKeyPress);
    const reminderList = document.getElementById("reminder-list");
    const reminderInput = document.getElementById("reminder-input");
    const addReminderButton = document.getElementById("add-reminder-button");

    function createReminder() {
        const reminderText = reminderInput.value.trim();
        if (reminderText !== "") {
            const reminderItem = document.createElement("li");
            reminderItem.textContent = reminderText;
            const deleteReminderButton = document.createElement("button");
            deleteReminderButton.textContent = "Delete";
            deleteReminderButton.classList.add("delete-button");
            reminderItem.appendChild(deleteReminderButton);
            reminderList.appendChild(reminderItem);
            reminderInput.value = "";
            deleteReminderButton.addEventListener("click", function() {
                reminderList.removeChild(reminderItem);
            });
        }
    }

    function addReminder() {
        createReminder();
    }

    function handleReminderKeyPress(event) {
        if (event.key === "Enter") {
            createReminder();
        }
    }
    addReminderButton.addEventListener("click", addReminder);
    reminderInput.addEventListener("keypress", handleReminderKeyPress);
    const goalList = document.getElementById("goal-list");
    const goalInput = document.getElementById("goal-input");
    const addGoalButton = document.getElementById("add-goal-button");

    function createGoal() {
        const goalText = goalInput.value.trim();
        if (goalText !== "") {
            const goalItem = document.createElement("li");
            goalItem.textContent = goalText;
            const deleteGoalButton = document.createElement("button");
            deleteGoalButton.textContent = "Delete";
            deleteGoalButton.classList.add("delete-button");
            goalItem.appendChild(deleteGoalButton);
            goalList.appendChild(goalItem);
            goalInput.value = "";
            deleteGoalButton.addEventListener("click", function() {
                goalList.removeChild(goalItem);
            });
        }
    }

    function addGoal() {
        createGoal();
    }

    function handleGoalKeyPress(event) {
        if (event.key === "Enter") {
            createGoal();
        }
    }
    addGoalButton.addEventListener("click", addGoal);
    goalInput.addEventListener("keypress", handleGoalKeyPress);
});