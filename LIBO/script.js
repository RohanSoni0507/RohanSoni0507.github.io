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

fetch('/get_all_books_json')
    .then(response => response.json())
    .then(data => {
        const bookTable = document.getElementById('bookTable');
        const bookRows = data.map(book => `
            <tr>
                <td>${book.bookName}</td>
                <td>${book.pages}</td>
                <td><a href="/books/${book.pdfFileName}" download>Download</a></td>
            </tr>
        `).join('');
        bookTable.innerHTML = bookRows;
    });

fetch('/get_book_count')
    .then(response => response.json())
    .then(data => {
        const bookCountSpan = document.getElementById('bookCount');
        bookCountSpan.textContent = data.bookCount;
    });

function generateDownloadLink(pdfFileName) {
    return `<a href="/books/${pdfFileName}" download>Download</a>`;
}

fetch('/get_sorted_books')
    .then(response => response.json())
    .then(sortedBooks => {
        const sortedBooksList = document.getElementById('sortedBooksList');
        const sortedBooksHTML = sortedBooks.map(book => `
            <li>
                <strong>Book Name:</strong> ${book.bookName}<br>
                <strong>Number of Pages:</strong> ${book.pages}<br>
                <strong>Download PDF:</strong> ${generateDownloadLink(book.pdfFileName)}
            </li>
        `).join('');
        sortedBooksList.innerHTML = sortedBooksHTML;
    });
