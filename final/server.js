// Dummy book data
const dummyBooks = [
    {
        bookName: "The Great Gatsby",
        pages: 180,
        pdfFileName: "great_gatsby.pdf"
    },
    {
        bookName: "To Kill a Mockingbird",
        pages: 281,
        pdfFileName: "to_kill_a_mockingbird.pdf"
    },
    {
        bookName: "1984",
        pages: 328,
        pdfFileName: "1984.pdf"
    },
    {
        bookName: "Pride and Prejudice",
        pages: 279,
        pdfFileName: "pride_and_prejudice.pdf"
    },
    {
        bookName: "The Catcher in the Rye",
        pages: 224,
        pdfFileName: "catcher_in_the_rye.pdf"
    }
];

// Function to display dummy books
function displayDummyBooks() {
    const bookTable = document.getElementById('bookTable');
    const bookRows = dummyBooks.map(book => `
        <tr>
            <td>${book.bookName}</td>
            <td>${book.pages}</td>
            <td><a href="/books/${book.pdfFileName}" download>Download</a></td>
        </tr>
    `).join('');
    bookTable.innerHTML = bookRows;
}

// Function to fetch and display the total book count
function fetchBookCount() {
    // Simulating a fetch request, replace with your actual API call
    const totalBooks = dummyBooks.length;
    const bookCountSpan = document.getElementById('bookCount');
    bookCountSpan.textContent = totalBooks;
}

// Function to generate download links for books
function generateDownloadLink(pdfFileName) {
    return `<a href="/books/${pdfFileName}" download>Download</a>`;
}

// Function to fetch and display sorted books in a list
function fetchSortedBooks() {
    // Simulating a fetch request, replace with your actual API call
    const sortedBooks = [...dummyBooks].sort((a, b) => a.bookName.localeCompare(b.bookName));
    
    const sortedBooksList = document.getElementById('sortedBooksList');
    const sortedBooksHTML = sortedBooks.map(book => `
        <li>
            <strong>Book Name:</strong> ${book.bookName}<br>
            <strong>Number of Pages:</strong> ${book.pages}<br>
            <strong>Download PDF:</strong> ${generateDownloadLink(book.pdfFileName)}
        </li>
    `).join('');
    sortedBooksList.innerHTML = sortedBooksHTML;
}

// Function to toggle dark mode
function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });
}

// Add event listeners and fetch data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayDummyBooks(); // Display dummy books
    fetchBookCount(); // Fetch and display book count
    fetchSortedBooks(); // Fetch and display sorted books
    toggleDarkMode(); // Toggle dark mode
});

// Add event listener for form submission (to handle adding new books)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const formData = new FormData(e.target);

    // Simulate adding a new book (replace with your actual server logic)
    const newBook = {
        bookName: formData.get('bookName'),
        pages: Number(formData.get('pages')),
        pdfFileName: formData.get('pdfFile').name,
    };

    // Add the new book to the dummy data
    dummyBooks.push(newBook);

    // Display the updated list of books
    displayDummyBooks();

    // Update the book count
    fetchBookCount();

    // Reset the form
    e.target.reset();
});
