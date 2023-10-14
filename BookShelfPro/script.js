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
    { name: 'Book 1', pdfLink: 'book1.pdf' },
    { name: 'Book 5', pdfLink: 'book5.pdf' },
    { name: 'Book 2', pdfLink: 'book2.pdf' },
    { name: 'Book 4', pdfLink: 'book4.pdf' },
    { name: 'Book 3', pdfLink: 'book3.pdf' },
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
    { name: 'Mathematics', image: 'math.jpg', books: [
        { name: 'Book 1', pdfLink: 'math-book1.pdf' },
        { name: 'Book 2', pdfLink: 'math-book2.pdf' },
        { name: 'Book 3', pdfLink: 'math-book3.pdf' }
    ] },
    { name: 'Science', image: 'science.jpg', books: [
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
