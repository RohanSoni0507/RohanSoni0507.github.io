document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
            saveTasksToLocalStorage();
        }
    });
    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            saveTasksToLocalStorage();
        }
    });
    function saveTasksToLocalStorage() {
        const tasks = [];
        document.querySelectorAll("li").forEach((task) => {
            tasks.push(task.textContent.trim());
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((taskText) => {
            const li = document.createElement("li");
            const taskTextWithoutDelete = taskText.replace('Delete', '');
            li.textContent = taskTextWithoutDelete;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete";
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
    loadTasksFromLocalStorage();
});