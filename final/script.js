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
    // Get the book count from the dummyBooks array
    const totalBooks = dummyBooks.length;
    const bookCountSpan = document.getElementById('bookCount');
    bookCountSpan.textContent = totalBooks;
}

// Function to generate download links for books
function generateDownloadLink(pdfFileName) {
    return `<a href="/books/${pdfFileName}" download>Download</a>`;
}

// Function to fetch and display sorted books in a list
// Function to fetch and display sorted books in a list
function fetchSortedBooks() {
    // Sort the dummyBooks array by book name
    const sortedBooks = [...dummyBooks].sort((a, b) => a.bookName.localeCompare(b.bookName));

    const sortedBooksList = document.getElementById('sortedBooksList');
    sortedBooksList.innerHTML = ''; // Clear the existing list

    sortedBooks.forEach(book => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Book Name:</strong> ${book.bookName}<br>
            <strong>Number of Pages:</strong> ${book.pages}<br>
            <strong>Download PDF:</strong> ${generateDownloadLink(book.pdfFileName)}
        `;
        sortedBooksList.appendChild(listItem);
    });
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

    // Add event listener for file input change
    const fileInput = document.getElementById('pdfFile');
    fileInput.addEventListener('change', handleFileInput);

    // Add event listener for form submission
    const form = document.getElementById('addBookForm');
    form.addEventListener('submit', handleSubmit);
});

// Function to handle file input change
function handleFileInput() {
    const fileInput = document.getElementById('pdfFile');
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        // Read the selected file and display its name
        const bookNameInput = document.getElementById('bookName');
        bookNameInput.value = selectedFile.name;
    }
}

// Function to handle form submission
// Function to handle form submission
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const bookNameInput = document.getElementById('bookName');
    const pagesInput = document.getElementById('pages');
    const fileInput = document.getElementById('pdfFile');

    const bookName = bookNameInput.value; // Get the book name entered by the user
    const pages = parseInt(pagesInput.value);
    const pdfFile = fileInput.files[0];

    if (!bookName || isNaN(pages) || !pdfFile) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new book object
    const newBook = {
        bookName: bookName,
        pages: pages,
        pdfFileName: pdfFile.name, // Use the name of the selected PDF file
    };

    // Add the new book to the dummy data
    dummyBooks.push(newBook);

    // Display the updated list of books in the table
    displayDummyBooks();

    // Update the book count
    fetchBookCount();

    // Clear the book name input
    bookNameInput.value = '';

    // Fetch and display sorted books
    fetchSortedBooks();
}


