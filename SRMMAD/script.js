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

const semesters = [
    {
        name: "Overall Winners at Vit Vellore Riviera'2024",
        image: "images/ach1.png",
        websiteLink: "https://www.instagram.com/p/C5YWbMDPkTJ/?hl=en",
    },
    {
        name: "2nd prize in Nukkad Naatak at VIT Vellore",
        image: "images/project2.jpeg",
        websiteLink: "https://www.instagram.com/p/C4bAETYvTz2/?hl=en&img_index=1",
    },
];

function createSemesterCards() {
    const semesterCardsContainer = document.querySelector('.semester-cards');

    semesters.forEach((semester) => {
        const card = document.createElement('div');
        card.classList.add('semester-card');
        card.id = semester.name.toLowerCase().replace(/\s/g, '-');

        const image = document.createElement('img');
        image.src = semester.image;
        image.alt = semester.name;
        image.classList.add('semester-image');

        const name = document.createElement('div');
        name.textContent = semester.name;
        name.classList.add('semester-name');

        const websiteLink = document.createElement('a');
        websiteLink.href = semester.websiteLink;
        websiteLink.target = "_blank";
        websiteLink.textContent = "Visit";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(websiteLink);

        semesterCardsContainer.appendChild(card);
    });
}

window.addEventListener('load', createSemesterCards);

const projectsData = [
    {
        name: "The Main Man - An SRM Movies And Dramatics Stage-play at VIT Vellore’s Riviera",
        image: "images/project1.jpeg",
        website: "https://youtu.be/qsPMFwp7Ke0?si=nHQ3947-5OvF6-FJ",
    },
    {
        name: "'Sabash Kachara' - An Award-winning Street play by SRM Movies And Dramatics at VIT Vellore's RIVIERA",
        image: "images/project2.jpeg",
        website: "https://youtu.be/JzU2homurzg?si=FKutAIimCItopHa8",
    },
    {
        name: "'TRING' - An SRM Movies And Dramatics Short-film by Gayathrisri.G and Team",
        image: "images/project3.jpeg",
        website: "https://youtu.be/hLwGsuNno6o?si=KpdAe22qsEJ0c0W4",
    },
    {
        name: "Serendipity- MIME SAARANG 2024",
        image: "images/project4.jpeg",
        website: "https://youtu.be/YHMNW5Bj0lI?si=bGbRdAcLvDRaEtgt",
    },
    {
        name: "'BIRTHDAY' | A Short-film by Ayush Yadav and Mrinaal Yadav for SRM Movies And Dramatics |",
        image: "images/project5.jpeg",
        website: "https://youtu.be/R9LpxPRuvfQ?si=8LsewuwZZuHgoJao",
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
        projectLink.textContent = "Visit";

        card.appendChild(image);
        card.appendChild(projectName);
        card.appendChild(projectLink);

        projectContainer.appendChild(card);
    });
}
createProjectCards();