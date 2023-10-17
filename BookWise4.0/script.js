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
        name: "Computer Organization and Design - The Hardware/Software Interface: RISC-V Edition by David A. Patterson and John L. Hennessy",
        pdfLink: "books/coabook1.pdf"
    },
    {
        name: "Computer Organisation and Architecture by Tarun Kumar Ghosh and Anindya Jyoti Pal",
        pdfLink: "books/coabook2.pdf"
    },
    {
        name: "Computer Organization and Architecture - Designing for Performance - Tenth Edition by William Stalling",
        pdfLink: "books/coabook3.pdf"
    },
    {
        name: "Computer Architecture & Parallel Processing by Kai Hwang & Briggs",
        pdfLink: "books/coabook4.pdf"
    },
    {
        name: "Computer architecture and organisation by Hayes , John P. - 1944",
        pdfLink: "books/coabook5.pdf"
    },
    {
        name: "Computer Organisation , 5E",
        pdfLink: "books/coabook6.pdf"
    },
    {
        name: "Advanced Programming Practice - Unit 5",
        pdfLink: "books/appunit5.pdf"
    },
    {
        name: "Advanced Programming Practice Lab - Week 11",
        pdfLink: "books/appweek11.pdf"
    },
    {
        name: "Advanced Programming Practice Lab - Week 10",
        pdfLink: "books/appweek10.pdf"
    },
    {
        name: "Transforms and Boundary Value Problems - Handwritten Notes - Unit 3",
        pdfLink: "books/mathunit3.pdf"
    },
    {
        name: "Data Structures and Algorithms Lab - Week 9",
        pdfLink: "books/dsalabweek9.pdf"
    },
    {
        name: "Advanced Programming Practice - Unit 4",
        pdfLink: "books/appunit4.pdf"
    },
    {
        name: "Maths Booster Question Paper - Solution",
        pdfLink: "books/boostersolution.pdf"
    },
    {
        name: "ADD ON COURSE IN C - ASSIGNEMNT 3 - STRUCTURE - L2 & S2",
        pdfLink: "books/adonass3.pdf"
    },
    {
        name: "Advanced Programming Practice Lab - Week 9",
        pdfLink: "books/applabweek9.pdf"
    },
    {
        name: "Operating Systems Lab - Week 9",
        pdfLink: "books/oslabweek9.pdf"
    },
    {
        name: "Computer Organisation and Architecture - Unit 4",
        pdfLink: "books/coaunit4.pdf"
    },
    {   name: "Design Thinking and Methodology - Business Model",         
        pdfLink: 'books/dtm1.pdf' },
    {
        name: "Data Structures and Algorithms - Unit 3",
        pdfLink: "books/dsaunit3.pdf"
    },
    {
        name: "Advanced Programming Practice - Unit 3",
        pdfLink: "books/appunit3.pdf"
    },
    {
        name: "Computer Organisation and Architecture - Unit 3",
        pdfLink: "books/coaunit3.pdf"
    },
    {
        name: "Operating Systems - Unit 2",
        pdfLink: "books/osunit2.pdf"
    },
    {
        name: "Data Structures and Algorithms - Unit 2",
        pdfLink: "books/dsaunit2.pdf"
    },
    {
        name: "Advanced Programming Practice - Unit 2",
        pdfLink: "books/appunit2.pdf"
    },
    {
        name: "Computer Organisation and Architecture - Unit 2",
        pdfLink: "books/coaunit2.pdf"
    },
    {
        name: "Data Structures and Algorithms - Unit 1",
        pdfLink: "books/dsaunit1.pdf"
    },
    {
        name: "Advanced Programming Practice - Unit 1",
        pdfLink: "books/appunit1.pdf"
    },
    {
        name: "Operating Systems - Unit 1",
        pdfLink: "books/osunit1.pdf"
    },
    {
        name: "Computer Organisation and Architecture - Unit 1",
        pdfLink: "books/coaunit1.pdf"
    },
    { 
        name: "Professional Ethics - CLA T1", 
        pdfLink: "books/pe.pdf" 
    },
    {
        name: "Operating Systems - Handbook",
        pdfLink: "books/oshandbook.pdf"
    },
    {  
         name: "Verbal Reasoning - Lesson Plan", 
        pdfLink: "books/vr.pdf" 
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
    { name: 'Transforms and Boundary Value Problems', image: 'images/tbvp.jpg', books: [
        {
            name: "Maths Booster Question Paper - Solution",
            pdfLink: "books/boostersolution.pdf"
        },
        {
            name: "Transforms and Boundary Value Problems - Handwritten Notes - Unit 3",
            pdfLink: "books/mathunit3.pdf"
        }
    ] },
    { name: 'Design Thinking and Methodology', image: 'images/dtm.jpg', books: [
        { name: "Design Thinking and Methodology - Business Model", pdfLink: "books/dtm1.pdf" }
    ] },
    { name: 'Computer Organisation and Architecture', image: 'images/coa.jpg', books: [
        {
            name: "Computer Organisation and Architecture - Unit 1",
            pdfLink: "books/coaunit1.pdf"
        },
        {
            name: "Computer Organisation and Architecture - Unit 2",
            pdfLink: "books/coaunit2.pdf"
        },
        {
            name: "Computer Organisation and Architecture - Unit 3",
            pdfLink: "books/coaunit3.pdf"
        },
        {
            name: "Computer Organisation and Architecture - Unit 4",
            pdfLink: "books/coaunit4.pdf"
        },
        {
            name: "Computer Organization and Design - The Hardware/Software Interface: RISC-V Edition by David A. Patterson and John L. Hennessy",
            pdfLink: "books/coabook1.pdf"
        },
        {
            name: "Computer Organisation and Architecture by Tarun Kumar Ghosh and Anindya Jyoti Pal",
            pdfLink: "books/coabook2.pdf"
        },
        {
            name: "Computer Organization and Architecture - Designing for Performance - Tenth Edition by William Stalling",
            pdfLink: "books/coabook3.pdf"
        },
        {
            name: "Computer Architecture & Parallel Processing by Kai Hwang & Briggs",
            pdfLink: "books/coabook4.pdf"
        },
        {
            name: "Computer architecture and organisation by Hayes , John P. - 1944",
            pdfLink: "books/coabook5.pdf"
        },
        {
            name: "Computer Organisation , 5E",
            pdfLink: "books/coabook6.pdf"
        },
    ] },
    { name: 'Data Structures and Algorithms', image: 'images/dsa.jpg', books: [
        {
            name: "Data Structures and Algorithms - Unit 1",
            pdfLink: "books/dsaunit1.pdf"
        },
        {
            name: "Data Structures and Algorithms - Unit 2",
            pdfLink: "books/dsaunit2.pdf"
        },
        {
            name: "Data Structures and Algorithms - Unit 3",
            pdfLink: "books/dsaunit3.pdf"
        },
        {
            name: "Data Structures and Algorithms Lab - Week 9",
            pdfLink: "books/dsalabweek9.pdf"
        }
    ] },
    { name: 'Operating Systems', image: 'images/os.jpg', books: [
        {
            name: "Operating Systems - Handbook",
            pdfLink: "books/oshandbook.pdf"
        },
        {
            name: "Operating Systems - Unit 1",
            pdfLink: "books/osunit1.pdf"
        },
        {
            name: "Operating Systems - Unit 2",
            pdfLink: "books/osunit2.pdf"
        },
        {
            name: "Operating Systems Lab - Week 9",
            pdfLink: "books/oslabweek9.pdf"
        }
    ] },
    { name: 'Advanced Programming Practice', image: 'images/app.jpg', books: [
        {
            name: "Advanced Programming Practice - Unit 1",
            pdfLink: "books/appunit1.pdf"
        },
        {
            name: "Advanced Programming Practice - Unit 2",
            pdfLink: "books/appunit2.pdf"
        },
        {
            name: "Advanced Programming Practice - Unit 3",
            pdfLink: "books/appunit3.pdf"
        },
        {
            name: "Advanced Programming Practice Lab - Week 9",
            pdfLink: "books/applabweek9.pdf"
        },
        {
            name: "Advanced Programming Practice - Unit 4",
            pdfLink: "books/appunit4.pdf"
        },
        {
            name: "Advanced Programming Practice - Unit 5",
            pdfLink: "books/appunit5.pdf"
        },
        {
            name: "Advanced Programming Practice Lab - Week 11",
            pdfLink: "books/appweek11.pdf"
        },
        {
            name: "Advanced Programming Practice Lab - Week 10",
            pdfLink: "books/appweek10.pdf"
        }
    ] },
    { name: 'Professional Ethics', image: 'images/pe.jpg', books: [
        { name: "Professional Ethics - CLA T1", 
          pdfLink: "books/pe.pdf" 
        }
    ] },
    { name: 'Verbal Reasoning', image: 'images/vr.jpg', books: [
        { name: "Verbal Reasoning - Lesson Plan", 
          pdfLink: "books/vr.pdf" 
        }
    ] },
    { name: 'Add on Course in C', image: 'images/add.jpg', books: [
        {
            name: "ADD ON COURSE IN C - ASSIGNEMNT 3 - STRUCTURE - L2 & S2",
            pdfLink: "books/adonass3.pdf"
        }
    ]}
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
        name: "2nd Semester",
        image: "images/2semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise2.0/",
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