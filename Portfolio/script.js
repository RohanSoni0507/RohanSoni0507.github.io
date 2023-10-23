const projectsData = [
    {
        name: "Library Management System",
        image: "images/project1.jpg",
        website: "https://rohansoni0507.github.io/MorseyCode/",
    },
    {
        name: "Morse Code Translator",
        image: "images/project2.jpg",
        website: "https://rohansoni0507.github.io/MorseyCode/",
    },
    {
        name: "Desktop Voice Assistant",
        image: "images/project3.jpg",
        website: "https://rohansoni0507.github.io/AIDesk/",
    },
    {
        name: "Round Robin Web Scheduler",
        image: "images/project4.jpg",
        website: "https://rohansoni0507.github.io/RRSim/",
    },
    {
        name: "Productivity Tracker",
        image: "images/project5.jpg",
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
createProjectCards();