

function openSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '0';
}

function closeSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '-300px';
}

const menuToggle = document.querySelector('.menu-toggle');
const closeMenuButton = document.querySelector('#close-menu');

menuToggle.addEventListener('click', openSlideInMenu);
closeMenuButton.addEventListener('click', closeSlideInMenu);

const projectsData = [
    {
        name: "Library Management System",
        image: "project1.jpg",
        website: "https://rohansoni0507.github.io/BookWise/",
    },
    {
        name: "Morse Code Translator",
        image: "project2.jpg",
        website: "https://rohansoni0507.github.io/MorseyCode/",
    },
    {
        name: "Voice-Activated Personal Assistant",
        image: "project3.jpg",
        website: "https://rohansoni0507.github.io/AIDesk/",
    },
    {
        name: "Productivity Tracker",
        image: "project4.jpg",
        website: "https://rohansoni0507.github.io/ProductivityPro/",
    },
];

function createProjectCards() {
    const projectContainer = document.querySelector(".project-card-container");

    projectsData.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.name;

        const projectName = document.createElement("h3");
        projectName.textContent = project.name;

        const projectLink = document.createElement("a");
        projectLink.href = project.website;
        projectLink.textContent = "Visit Project";

        card.appendChild(image);
        card.appendChild(projectName);
        card.appendChild(projectLink);

        projectContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    createProjectCards();
});

class Process {
    constructor(id, arrivalTime, burstTime) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.remainingTime = burstTime;
        this.startTime = -1;
        this.finishTime = -1;
        this.waitingTime = 0;
        this.turnaroundTime = 0;
    }
}




function compareById(a, b) {
    return a.id - b.id;
}

function executeRoundRobin(processes, timeQuantum, results) {
    let currentTime = 0;
    while (processes.length > 0) {
        const currentProcess = processes.shift();

        if (currentProcess.startTime === -1) {
            currentProcess.startTime = Math.max(currentTime, currentProcess.arrivalTime);
        }

        const executionTime = Math.min(timeQuantum, currentProcess.remainingTime);

        currentProcess.remainingTime -= executionTime;
        currentTime += executionTime;

        for (const p of processes) {
            if (p.arrivalTime <= currentTime) {
                p.waitingTime += executionTime;
            }
        }

        if (currentProcess.remainingTime > 0) {
            processes.push(currentProcess);
        } else {
            currentProcess.finishTime = currentTime;
            currentProcess.turnaroundTime = currentProcess.finishTime - currentProcess.arrivalTime;
            results.push(currentProcess);
        }
    }

    for (const finalProcess of results) {
        finalProcess.waitingTime = finalProcess.turnaroundTime - finalProcess.burstTime;
    }
}

function createProcessFields(numProcesses) {
    const processFields = document.getElementById('processFields');
    processFields.innerHTML = '';

    for (let i = 1; i <= numProcesses; i++) {
        processFields.innerHTML += `
            <label for="arrivalTime${i}">Arrival Time for Process ${i} (in ms):</label>
            <input type="number" id="arrivalTime${i}" name="arrivalTime${i}" required><br>
            <label for="burstTime${i}">Burst Time for Process ${i} (in ms):</label>
            <input type="number" id="burstTime${i}" name="burstTime${i}" required><br>
        `;
    }
}

function handleFormSubmission() {
    const numProcesses = parseInt(document.getElementById('numProcesses').value);
    const timeQuantum = parseInt(document.getElementById('timeQuantum').value);
    const resultsTableBody = document.querySelector('table tbody');

    const processes = [];

    for (let i = 1; i <= numProcesses; i++) {
        const arrivalTime = parseInt(document.getElementById(`arrivalTime${i}`).value);
        const burstTime = parseInt(document.getElementById(`burstTime${i}`).value);
        processes.push(new Process(i, arrivalTime, burstTime));
    }

    const results = [];
    executeRoundRobin(processes, timeQuantum, results);

    results.sort(compareById);

    resultsTableBody.innerHTML = '';
    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        resultsTableBody.innerHTML += `
            <tr>
                <td>P${i + 1}</td>
                <td>${result.arrivalTime}</td>
                <td>${result.burstTime}</td>
                <td>${result.startTime}</td>
                <td>${result.waitingTime}</td>
                <td>${result.finishTime}</td>
                <td>${result.turnaroundTime}</td>
            </tr>
        `;
    }

    const averageWaitingTime = results.reduce((sum, process) => sum + process.waitingTime, 0) / numProcesses;
    const averageTurnaroundTime = results.reduce((sum, process) => sum + process.turnaroundTime, 0) / numProcesses;

    const averageWaitingTimeElement = document.getElementById('averageWaitingTime');
    averageWaitingTimeElement.textContent = `Average Waiting Time: ${averageWaitingTime.toFixed(2)} ms`;

    const averageTurnaroundTimeElement = document.getElementById('averageTurnaroundTime');
    averageTurnaroundTimeElement.textContent = `Average Turnaround Time: ${averageTurnaroundTime.toFixed(2)} ms`;
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'block';
}

document.getElementById('runButton').addEventListener('click', handleFormSubmission);

document.getElementById('numProcesses').addEventListener('input', function () {
    const numProcesses = parseInt(this.value);
    createProcessFields(numProcesses);
});