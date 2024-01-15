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

const books = [
    {
        name: "B.E.E.E - Unit 1",
        pdfLink: "books/beeunit1.pdf"
    },
    {
        name: "B.E.E.E - Unit 2",
        pdfLink: "books/beeunit2.pdf"
    },
    {
        name: "B.E.E.E - Unit 3",
        pdfLink: "books/beeunit3.pdf"
    },
    {
        name: "B.E.E.E - Unit 4",
        pdfLink: "books/beeunit4.pdf"
    },
    {
        name: "B.E.E.E - Unit 5",
        pdfLink: "books/beeunit5.pdf"
    },
    {
        name: "O.O.D.P - Unit 1",
        pdfLink: "books/oodpunit1.pdf"
    },
    {
        name: "O.O.D.P - Unit 2",
        pdfLink: "books/oodpunit2.pdf"
    },
    {
        name: "O.O.D.P - Unit 3",
        pdfLink: "books/oodpunit3.pdf"
    },
    {
        name: "O.O.D.P - Unit 4",
        pdfLink: "books/oodpunit4.pdf"
    },
    {
        name: "O.O.D.P - Unit 5",
        pdfLink: "books/oodpunit5.pdf"
    },
    {
        name: "PHYSICS - Unit 1",
        pdfLink: "books/phyunit1.pdf"
    },
    {
        name: "PHYSICS - Unit 2",
        pdfLink: "books/phyunit2.pdf"
    },
    {
        name: "PHYSICS - Unit 3",
        pdfLink: "books/phyunit3.pdf"
    },
    {
        name: "PHYSICS - Unit 4",
        pdfLink: "books/phyunit4.pdf"
    },
    {
        name: "PHYSICS - Unit 5",
        pdfLink: "books/phyunit5.pdf"
    },
];

function listBooks(books) {
    const table = document.querySelector('#book-list');
    table.innerHTML = '';

    for (const book of books) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);

        nameCell.textContent = book.name;
        linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download PDF</a>`;
    }
}


function sortBooks() {
    const sortedBooks = quickSort(books);
    listBooks(sortedBooks);
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].name < pivot.name) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

window.addEventListener('load', () => {
    const showBooksPage = document.querySelector('#show-book-list');

    if (showBooksPage) {
        listBooks(books);
    }
    const sortBooksPage = document.querySelector('#sort-book-list');

    if (sortBooksPage) {
        sortBooks();
    }
});

const subjects = [
    { name: 'B.E.E.E', image: 'images/bee.jpg', books: [
        {
            name: "B.E.E.E - Unit 1",
            pdfLink: "books/beeunit1.pdf"
        },
        {
            name: "B.E.E.E - Unit 2",
            pdfLink: "books/beeunit2.pdf"
        },
        {
            name: "B.E.E.E - Unit 3",
            pdfLink: "books/beeunit3.pdf"
        },
        {
            name: "B.E.E.E - Unit 4",
            pdfLink: "books/beeunit4.pdf"
        },
        {
            name: "B.E.E.E - Unit 5",
            pdfLink: "books/beeunit5.pdf"
        },
    ] },
    { name: 'O.O.D.P', image: 'images/oodp.jpg', books: [
        {
            name: "O.O.D.P - Unit 1",
            pdfLink: "books/oodpunit1.pdf"
        },
        {
            name: "O.O.D.P - Unit 2",
            pdfLink: "books/oodpunit2.pdf"
        },
        {
            name: "O.O.D.P - Unit 3",
            pdfLink: "books/oodpunit3.pdf"
        },
        {
            name: "O.O.D.P - Unit 4",
            pdfLink: "books/oodpunit4.pdf"
        },
        {
            name: "O.O.D.P - Unit 5",
            pdfLink: "books/oodpunit5.pdf"
        },
    ] },
    { name: 'PHYSICS', image: 'images/phy.jpg', books: [
        {
            name: "PHYSICS - Unit 1",
            pdfLink: "books/phyunit1.pdf"
        },
        {
            name: "PHYSICS - Unit 2",
            pdfLink: "books/phyunit2.pdf"
        },
        {
            name: "PHYSICS - Unit 3",
            pdfLink: "books/phyunit3.pdf"
        },
        {
            name: "PHYSICS - Unit 4",
            pdfLink: "books/phyunit4.pdf"
        },
        {
            name: "PHYSICS - Unit 5",
            pdfLink: "books/phyunit5.pdf"
        },
    ] }
];

function createSubjectCards() {
    const subjectCardsContainer = document.querySelector('.subject-cards');

    subjects.forEach((subject) => {
        const card = document.createElement('div');
        card.classList.add('subject-card');

        const image = document.createElement('img');
        image.src = subject.image;
        image.alt = subject.name;
        image.classList.add('subject-image');

        const name = document.createElement('div');
        name.textContent = subject.name;
        name.classList.add('subject-name');

        card.appendChild(image);
        card.appendChild(name);
        card.addEventListener('click', () => displayBooks(subject.books));

        subjectCardsContainer.appendChild(card);
    });
}

function displayBooks(books) {
    const booksList = document.querySelector('.books-list');
    booksList.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('book-table');

    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell(0);
    const linkHeader = headerRow.insertCell(1);
    nameHeader.textContent = 'Book Name';
    linkHeader.textContent = 'PDF Link';

    books.forEach((book) => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);

        nameCell.textContent = book.name;
        linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download PDF</a>`;
    });

    booksList.appendChild(table);
}

window.addEventListener('load', createSubjectCards);

const semesters = [
    {
        name: "1st Semester",
        image: "images/1semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise1.0/",
    },
    {
        name: "3rd Semester",
        image: "images/3semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise3.0/",
    },
    {
        name: "4th Semester",
        image: "images/4semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise4.0/",
    },
    {
        name: "5th Semester",
        image: "images/5semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise5.0/",
    },    {
        name: "6th Semester",
        image: "images/6semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise6.0/",
    },
    {
        name: "7th Semester",
        image: "images/7semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise7.0/",
    },    {
        name: "8th Semester",
        image: "images/8semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise8.0/",
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
        websiteLink.textContent = "Visit Website";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(websiteLink);

        semesterCardsContainer.appendChild(card);
    });
}

window.addEventListener('load', createSemesterCards);

const projectsData = [
    {
        name: "Morse Code Translator",
        image: "images/project1.jpg",
        website: "https://rohansoni0507.github.io/MorseyCode/",
    },
    {
        name: "Desktop Voice Assistant",
        image: "images/project2.jpg",
        website: "https://rohansoni0507.github.io/AIDesk/",
    },
    {
        name: "Round Robin Web Scheduler",
        image: "images/project3.jpg",
        website: "https://rohansoni0507.github.io/RRSim/",
    },
    {
        name: "Productivity Tracker",
        image: "images/project4.jpg",
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