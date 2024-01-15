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
        name: "Biology - Unit 1",
        pdfLink: "books/biounit1.pdf"
    },
    {
        name: "Biology - Unit 2",
        pdfLink: "books/biounit2.pdf"
    },
    {
        name: "Biology - Unit 3",
        pdfLink: "books/biounit3.pdf"
    },
    {
        name: "Biology - Unit 4",
        pdfLink: "books/biounit4.pdf"
    },
    { 
        name: "Chemistry - Lesson Plan",
        pdfLink: "books/chemlessonplan.pdf" 
    },
    { 
        name: "Chemistry - Unit 1",
        pdfLink: "books/chemunit1.pdf" 
    },
    {
        name: "Japanese - Unit 1",
        pdfLink: "books/japunit1.pdf"
    },
    {
        name: "Japanese - Unit 2",
        pdfLink: "books/japunit2.pdf"
    },
    {
        name: "Japanese - Unit 3",
        pdfLink: "books/japunit3.pdf"
    },
    {
        name: "Japanese - Unit 4",
        pdfLink: "books/japunit4.pdf"
    },
    {
        name: "Japanese - Unit 5",
        pdfLink: "books/japunit5.pdf"
    },
    {
        name: "Japanese - Unit 6",
        pdfLink: "books/japunit6.pdf"
    },
    {
        name: "Japanese - Unit 7",
        pdfLink: "books/japunit7.pdf"
    },
    {
        name: "Japanese - Unit 8",
        pdfLink: "books/japunit8.pdf"
    },
    {
        name: "Engineering Mathematics-1",
        pdfLink: "books/mathbook.pdf"
    },
    {
        name: "Philosophy of Engineering - Unit 1",
        pdfLink: "books/philunit1.pdf"
    },
    {
        name: "Philosophy of Engineering - Unit 2",
        pdfLink: "books/philunit2.pdf"
    },
    {
        name: "Philosophy of Engineering - Unit 3",
        pdfLink: "books/philunit3.pdf"
    },
    {
        name: "P.P.S - Unit 1",
        pdfLink: "books/ppsunit1.pdf"
    },
    {
        name: "P.P.S - Unit 3",
        pdfLink: "books/ppsunit3.pdf"
    },
    {
        name: "P.P.S - Unit 4",
        pdfLink: "books/ppsunit4.pdf"
    },
    {
        name: "P.P.S - Unit 5",
        pdfLink: "books/ppsunit5.pdf"
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
    { name: 'Biology', image: 'images/bio.jpg', books: [
        {
            name: "Biology - Unit 1",
            pdfLink: "books/biounit1.pdf"
        },
        {
            name: "Biology - Unit 2",
            pdfLink: "books/biounit2.pdf"
        },
        {
            name: "Biology - Unit 3",
            pdfLink: "books/biounit3.pdf"
        },
        {
            name: "Biology - Unit 4",
            pdfLink: "books/biounit4.pdf"
        },
    ] },
    { name: 'Chemistry', image: 'images/chem.jpg', books: [
        { 
         name: "Chemistry - Lesson Plan",
         pdfLink: "books/chemlessonplan.pdf" 
        },
        { 
            name: "Chemistry - Unit 1",
            pdfLink: "books/chemunit1.pdf" 
        }
    ] },
    { name: 'Japanese', image: 'images/jap.jpg', books: [
        {
            name: "Japanese - Unit 1",
            pdfLink: "books/japunit1.pdf"
        },
        {
            name: "Japanese - Unit 2",
            pdfLink: "books/japunit2.pdf"
        },
        {
            name: "Japanese - Unit 3",
            pdfLink: "books/japunit3.pdf"
        },
        {
            name: "Japanese - Unit 4",
            pdfLink: "books/japunit4.pdf"
        },
        {
            name: "Japanese - Unit 5",
            pdfLink: "books/japunit5.pdf"
        },
        {
            name: "Japanese - Unit 6",
            pdfLink: "books/japunit6.pdf"
        },
        {
            name: "Japanese - Unit 7",
            pdfLink: "books/japunit7.pdf"
        },
        {
            name: "Japanese - Unit 8",
            pdfLink: "books/japunit8.pdf"
        },
    ] },
    { name: 'Maths', image: 'images/math.jpg', books: [
        {
            name: "Engineering Mathematics-1",
            pdfLink: "books/mathbook.pdf"
        },
    ] },
    { name: 'Philosophy of Engineering', image: 'images/phil.jpg', books: [
        {
            name: "Philosophy of Engineering - Unit 1",
            pdfLink: "books/philunit1.pdf"
        },
        {
            name: "Philosophy of Engineering - Unit 2",
            pdfLink: "books/philunit2.pdf"
        },
        {
            name: "Philosophy of Engineering - Unit 3",
            pdfLink: "books/philunit3.pdf"
        },
    ] },
    { name: 'P.P.S', image: 'images/pps.jpg', books: [
        {
            name: "P.P.S - Unit 1",
            pdfLink: "books/ppsunit1.pdf"
        },
        {
            name: "P.P.S - Unit 3",
            pdfLink: "books/ppsunit3.pdf"
        },
        {
            name: "P.P.S - Unit 4",
            pdfLink: "books/ppsunit4.pdf"
        },
        {
            name: "P.P.S - Unit 5",
            pdfLink: "books/ppsunit5.pdf"
        },
    ] },
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
        name: "2nd Semester",
        image: "images/2semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise2.0/",
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