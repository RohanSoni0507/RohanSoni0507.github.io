// script.js

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

const bookTable = document.getElementById('bookTable');
const bookCountSpan = document.getElementById('bookCount');
const sortedBooksList = document.getElementById('sortedBooksList');

// Function to generate download links
function generateDownloadLink(pdfFileName) {
    return `/books/${pdfFileName}`;
}

// Fetch book data and populate the table
fetch('/get_all_books')
    .then(response => response.json())
    .then(data => {
        // Clear the table
        bookTable.innerHTML = '';

        data.forEach(book => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const pagesCell = document.createElement('td');
            const downloadCell = document.createElement('td');
            const downloadLink = document.createElement('a');

            nameCell.textContent = book.bookName;
            pagesCell.textContent = book.pages;
            downloadLink.textContent = 'Download';
            downloadLink.href = generateDownloadLink(book.pdfFileName);
            downloadLink.download = book.pdfFileName;

            downloadCell.appendChild(downloadLink);
            row.appendChild(nameCell);
            row.appendChild(pagesCell);
            row.appendChild(downloadCell);

            bookTable.appendChild(row);
        });
    });

// Fetch book count and display it
fetch('/get_book_count')
    .then(response => response.text())
    .then(data => {
        bookCountSpan.textContent = data;
    });

// Fetch sorted books and populate the list
fetch('/get_sorted_books')
    .then(response => response.json())
    .then(data => {
        // Clear the list
        sortedBooksList.innerHTML = '';

        data.forEach(book => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Book Name:</strong> ${book.bookName}<br>
                <strong>Number of Pages:</strong> ${book.pages}<br>
                <strong>Download PDF:</strong> <a href="${generateDownloadLink(book.pdfFileName)}" download>Download</a>
            `;
            sortedBooksList.appendChild(listItem);
        });
    });

// Additional code that can be moved from server.js
// For example, handling form submissions, adding books, etc.

// Example of handling form submission
document.getElementById('addBookForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const response = await fetch('/add_book', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        // Refresh the book data after adding a new book
        fetch('/get_all_books')
            .then(response => response.json())
            .then(data => {
                // Clear the table
                bookTable.innerHTML = '';

                data.forEach(book => {
                    const row = document.createElement('tr');
                    const nameCell = document.createElement('td');
                    const pagesCell = document.createElement('td');
                    const downloadCell = document.createElement('td');
                    const downloadLink = document.createElement('a');

                    nameCell.textContent = book.bookName;
                    pagesCell.textContent = book.pages;
                    downloadLink.textContent = 'Download';
                    downloadLink.href = generateDownloadLink(book.pdfFileName);
                    downloadLink.download = book.pdfFileName;

                    downloadCell.appendChild(downloadLink);
                    row.appendChild(nameCell);
                    row.appendChild(pagesCell);
                    row.appendChild(downloadCell);

                    bookTable.appendChild(row);
                });
            });

        // Reset the form
        event.target.reset();
    } else {
        // Handle error
        console.error('Error adding book');
    }
});
