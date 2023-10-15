// Function to open the slide-in menu
function openSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '0';
}

// Function to close the slide-in menu
function closeSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '-300px'; // Adjust this value based on your menu's width
}

// Add event listeners for the menu toggle button and close button
const menuToggle = document.querySelector('.menu-toggle');
const closeMenuButton = document.querySelector('#close-menu');

menuToggle.addEventListener('click', openSlideInMenu);
closeMenuButton.addEventListener('click', closeSlideInMenu);

// Dummy book data
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
        name: "Operating Systems - Handbook",
        pdfLink: "books/oshandbook.pdf"
    },
];

// Function to list books in a table
function listBooks() {
    const table = document.querySelector('#book-list');
    table.innerHTML = ''; // Clear the table

    books.forEach((book) => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);

        nameCell.textContent = book.name;
        linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download PDF</a>`;
    });
}

// Function to sort books by name (using quick sort)
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

// Function to handle sorting and re-listing books
function sortBooks() {
    const sortedBooks = quickSort(books);
    books.length = 0; // Clear the original array
    books.push(...sortedBooks);
    listBooks(); // Re-list the sorted books
}

// List books and sort when the page loads
window.addEventListener('load', () => {
    sortBooks(); // Sort the books
});

// Dummy subjects and books
const subjects = [
    { name: 'Transforms and Boundary Value Problems', image: 'tbvp.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Design Thinking and Methodology', image: 'dtm.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Computer Organisation and Architecture', image: 'coa.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Data Structures and Algorithms', image: 'dsa.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Operating Systems', image: 'os.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Advanced Programming Practice', image: 'app.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Professional Ethics', image: 'pe.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Verbal Reasoning', image: 'vr.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Add on Course in C', image: 'add.jpg', books: [
        { name: 'Book 4', pdfLink: 'science-book4.pdf' },
        { name: 'Book 5', pdfLink: 'science-book5.pdf' },
        { name: 'Book 6', pdfLink: 'science-book6.pdf' }
    ]}
    // Add more subjects and books here
];

// Function to create subject cards
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

// Function to display books for a selected subject in table format
function displayBooks(books) {
    const booksList = document.querySelector('.books-list');
    booksList.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('book-table');

    // Create table header
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell(0);
    const linkHeader = headerRow.insertCell(1);
    nameHeader.textContent = 'Book Name';
    linkHeader.textContent = 'PDF Link';

    // Populate the table with book data
    books.forEach((book) => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);

        nameCell.textContent = book.name;
        linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download PDF</a>`;
    });

    booksList.appendChild(table);
}

// List subject cards when the page loads
window.addEventListener('load', createSubjectCards);
