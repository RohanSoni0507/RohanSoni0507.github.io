document.addEventListener("DOMContentLoaded", function () {
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
  
        deleteTaskButton.addEventListener("click", function () {
          taskList.removeChild(taskItem);
          removeTaskFromLocalStorage(taskText);
        });
        saveTaskToLocalStorage(taskText);
      }
    }
  
    addTaskButton.addEventListener("click", createTask);
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        createTask();
      }
    });
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
  
        deleteTodoButton.addEventListener("click", function () {
          todoList.removeChild(todoItem);
          removeTodoFromLocalStorage(todoText);
        });
        saveTodoToLocalStorage(todoText);
      }
    }
  
    addTodoButton.addEventListener("click", createTodo);
    todoInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        createTodo();
      }
    });
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
  
        deleteReminderButton.addEventListener("click", function () {
          reminderList.removeChild(reminderItem);
          removeReminderFromLocalStorage(reminderText);
        });
        saveReminderToLocalStorage(reminderText);
      }
    }
  
    addReminderButton.addEventListener("click", createReminder);
    reminderInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        createReminder();
      }
    });
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
  
        deleteGoalButton.addEventListener("click", function () {
          goalList.removeChild(goalItem);
          removeGoalFromLocalStorage(goalText);
        });
  
        saveGoalToLocalStorage(goalText);
      }
    }
  
    addGoalButton.addEventListener("click", createGoal);
    goalInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        createGoal();
      }
    });
  
    function saveTaskToLocalStorage(taskText) {
      let tasks;
      if (localStorage.getItem("tasks") === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }
  
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function removeTaskFromLocalStorage(taskText) {
      let tasks;
      if (localStorage.getItem("tasks") === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }
  
      const taskIndex = tasks.indexOf(taskText);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
      }
  
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function saveTodoToLocalStorage(todoText) {
      let todos;
      if (localStorage.getItem("todos") === null) {
        todos = [];
      } else {
        todos = JSON.parse(localStorage.getItem("todos"));
      }
  
      todos.push(todoText);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
    function removeTodoFromLocalStorage(todoText) {
      let todos;
      if (localStorage.getItem("todos") === null) {
        todos = [];
      } else {
        todos = JSON.parse(localStorage.getItem("todos"));
      }
  
      const todoIndex = todos.indexOf(todoText);
      if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
      }
  
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
    function saveReminderToLocalStorage(reminderText) {
      let reminders;
      if (localStorage.getItem("reminders") === null) {
        reminders = [];
      } else {
        reminders = JSON.parse(localStorage.getItem("reminders"));
      }
  
      reminders.push(reminderText);
      localStorage.setItem("reminders", JSON.stringify(reminders));
    }
  
    function removeReminderFromLocalStorage(reminderText) {
      let reminders;
      if (localStorage.getItem("reminders") === null) {
        reminders = [];
      } else {
        reminders = JSON.parse(localStorage.getItem("reminders"));
      }
  
      const reminderIndex = reminders.indexOf(reminderText);
      if (reminderIndex !== -1) {
        reminders.splice(reminderIndex, 1);
      }
  
      localStorage.setItem("reminders", JSON.stringify(reminders));
    }
  
    function saveGoalToLocalStorage(goalText) {
      let goals;
      if (localStorage.getItem("goals") === null) {
        goals = [];
      } else {
        goals = JSON.parse(localStorage.getItem("goals"));
      }
  
      goals.push(goalText);
      localStorage.setItem("goals", JSON.stringify(goals));
    }
  
    function removeGoalFromLocalStorage(goalText) {
      let goals;
      if (localStorage.getItem("goals") === null) {
        goals = [];
      } else {
        goals = JSON.parse(localStorage.getItem("goals"));
      }
  
      const goalIndex = goals.indexOf(goalText);
      if (goalIndex !== -1) {
        goals.splice(goalIndex, 1);
      }
  
      localStorage.setItem("goals", JSON.stringify(goals));
    }
  
    function initializeApp() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
      const goals = JSON.parse(localStorage.getItem("goals")) || [];
  
      tasks.forEach((taskText) => createTaskElement(taskText));
      todos.forEach((todoText) => createTodoElement(todoText));
      reminders.forEach((reminderText) => createReminderElement(reminderText));
      goals.forEach((goalText) => createGoalElement(goalText));
    }
  
    function createTaskElement(taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      const deleteTaskButton = document.createElement("button");
      deleteTaskButton.textContent = "Delete";
      deleteTaskButton.classList.add("delete-button");
  
      taskItem.appendChild(deleteTaskButton);
  
      taskList.appendChild(taskItem);
  
      deleteTaskButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
        removeTaskFromLocalStorage(taskText);
      });
    }
  

function createTaskElement(taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
  
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.textContent = "Delete";
    deleteTaskButton.classList.add("delete-button");
  
    taskItem.appendChild(deleteTaskButton);
  
    taskList.appendChild(taskItem);
  
    deleteTaskButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
      removeTaskFromLocalStorage(taskText);
    });
  }
  
  function createTodoElement(todoText) {
    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;
  
    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.textContent = "Delete";
    deleteTodoButton.classList.add("delete-button");
  
    todoItem.appendChild(deleteTodoButton);
  
    todoList.appendChild(todoItem);
  
    deleteTodoButton.addEventListener("click", function () {
      todoList.removeChild(todoItem);
      removeTodoFromLocalStorage(todoText);
    });
  }
  
  function createReminderElement(reminderText) {
    const reminderItem = document.createElement("li");
    reminderItem.textContent = reminderText;
  
    const deleteReminderButton = document.createElement("button");
    deleteReminderButton.textContent = "Delete";
    deleteReminderButton.classList.add("delete-button");
  
    reminderItem.appendChild(deleteReminderButton);
  
    reminderList.appendChild(reminderItem);
  
    deleteReminderButton.addEventListener("click", function () {
      reminderList.removeChild(reminderItem);
      removeReminderFromLocalStorage(reminderText);
    });
  }
  
  function createGoalElement(goalText) {
    const goalItem = document.createElement("li");
    goalItem.textContent = goalText;
  
    const deleteGoalButton = document.createElement("button");
    deleteGoalButton.textContent = "Delete";
    deleteGoalButton.classList.add("delete-button");
  
    goalItem.appendChild(deleteGoalButton);
  
    goalList.appendChild(goalItem);
  
    deleteGoalButton.addEventListener("click", function () {
      goalList.removeChild(goalItem);
      removeGoalFromLocalStorage(goalText);
    });
  }
    initializeApp();
  });
