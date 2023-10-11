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
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
          createTaskElement(taskText);
          saveToLocalStorage("tasks", taskText);
          taskInput.value = "";
      }
  });

  // Function to create and append a task element
  function createTaskElement(taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      const deleteTaskButton = document.createElement("button");
      deleteTaskButton.textContent = "Delete";
      deleteTaskButton.classList.add("delete-button");

      taskItem.appendChild(deleteTaskButton);
      taskList.appendChild(taskItem);

      // Add an event listener to remove the task
      deleteTaskButton.addEventListener("click", function () {
          taskList.removeChild(taskItem);
          removeFromLocalStorage("tasks", taskText);
      });
  }

  const todoInput = document.getElementById("todo-input");
  const addTodoButton = document.getElementById("add-todo-button");
  const todoList = document.getElementById("todo-list");

  addTodoButton.addEventListener("click", function () {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
          createTodoElement(todoText);
          saveToLocalStorage("todos", todoText);
          todoInput.value = "";
      }
  });

  // Function to create and append a to-do element
  function createTodoElement(todoText) {
      const todoItem = document.createElement("li");
      todoItem.textContent = todoText;

      const deleteTodoButton = document.createElement("button");
      deleteTodoButton.textContent = "Delete";
      deleteTodoButton.classList.add("delete-button");

      todoItem.appendChild(deleteTodoButton);
      todoList.appendChild(todoItem);

      // Add an event listener to remove the to-do
      deleteTodoButton.addEventListener("click", function () {
          todoList.removeChild(todoItem);
          removeFromLocalStorage("todos", todoText);
      });
  }

  const reminderInput = document.getElementById("reminder-input");
  const addReminderButton = document.getElementById("add-reminder-button");
  const reminderList = document.getElementById("reminder-list");

  addReminderButton.addEventListener("click", function () {
      const reminderText = reminderInput.value.trim();
      if (reminderText !== "") {
          createReminderElement(reminderText);
          saveToLocalStorage("reminders", reminderText);
          reminderInput.value = "";
      }
  });

  // Function to create and append a reminder element
  function createReminderElement(reminderText) {
      const reminderItem = document.createElement("li");
      reminderItem.textContent = reminderText;

      const deleteReminderButton = document.createElement("button");
      deleteReminderButton.textContent = "Delete";
      deleteReminderButton.classList.add("delete-button");

      reminderItem.appendChild(deleteReminderButton);
      reminderList.appendChild(reminderItem);

      // Add an event listener to remove the reminder
      deleteReminderButton.addEventListener("click", function () {
          reminderList.removeChild(reminderItem);
          removeFromLocalStorage("reminders", reminderText);
      });
  }

  const goalInput = document.getElementById("goal-input");
  const addGoalButton = document.getElementById("add-goal-button");
  const goalList = document.getElementById("goal-list");

  addGoalButton.addEventListener("click", function () {
      const goalText = goalInput.value.trim();
      if (goalText !== "") {
          createGoalElement(goalText);
          saveToLocalStorage("goals", goalText);
          goalInput.value = "";
      }
  });

  // Function to create and append a goal element
  function createGoalElement(goalText) {
      const goalItem = document.createElement("li");
      goalItem.textContent = goalText;

      const deleteGoalButton = document.createElement("button");
      deleteGoalButton.textContent = "Delete";
      deleteGoalButton.classList.add("delete-button");

      goalItem.appendChild(deleteGoalButton);
      goalList.appendChild(goalItem);

      // Add an event listener to remove the goal
      deleteGoalButton.addEventListener("click", function () {
          goalList.removeChild(goalItem);
          removeFromLocalStorage("goals", goalText);
      });
  }

  // Save to local storage
  function saveToLocalStorage(key, value) {
      const data = JSON.parse(localStorage.getItem(key)) || [];
      data.push(value);
      localStorage.setItem(key, JSON.stringify(data));
  }

  // Remove from local storage
  function removeFromLocalStorage(key, value) {
      const data = JSON.parse(localStorage.getItem(key)) || [];
      const index = data.indexOf(value);
      if (index > -1) {
          data.splice(index, 1);
          localStorage.setItem(key, JSON.stringify(data));
      }
  }

  // Initialize the app by loading data from local storage
  function initializeApp(listId) {
      const items = JSON.parse(localStorage.getItem(listId)) || [];
      items.forEach((itemText) => {
          if (listId === "tasks") {
              createTaskElement(itemText);
          } else if (listId === "todos") {
              createTodoElement(itemText);
          } else if (listId === "reminders") {
              createReminderElement(itemText);
          } else if (listId === "goals") {
              createGoalElement(itemText);
          }
      });
  }

  initializeApp("tasks");
  initializeApp("todos");
  initializeApp("reminders");
  initializeApp("goals");
});
