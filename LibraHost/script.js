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

function fetchBookCount() {
    const totalBooks = dummyBooks.length;
    const bookCountSpan = document.getElementById('bookCount');
    bookCountSpan.textContent = totalBooks;
}

function generateDownloadLink(pdfFileName) {
    return `<a href="/books/${pdfFileName}" download>Download</a>`;
}

function fetchSortedBooks() {
    function quicksort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i].bookName < pivot.bookName) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...quicksort(left), pivot, ...quicksort(right)];
    }

    const sortedBooks = quicksort([...dummyBooks]);

    const sortedBooksList = document.getElementById('sortedBooksList');
    sortedBooksList.innerHTML = '';

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

document.addEventListener('DOMContentLoaded', () => {
    displayDummyBooks();
    fetchBookCount();
    fetchSortedBooks();
    toggleDarkMode();

    const fileInput = document.getElementById('pdfFile');
    fileInput.addEventListener('change', handleFileInput);

    const form = document.getElementById('addBookForm');
    form.addEventListener('submit', handleSubmit);
});

function handleFileInput() {
    const fileInput = document.getElementById('pdfFile');
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const bookNameInput = document.getElementById('bookName');
        bookNameInput.value = selectedFile.name;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const bookNameInput = document.getElementById('bookName');
    const pagesInput = document.getElementById('pages');
    const fileInput = document.getElementById('pdfFile');

    const bookName = bookNameInput.value;
    const pages = parseInt(pagesInput.value);
    const pdfFile = fileInput.files[0];

    if (!bookName || isNaN(pages) || !pdfFile) {
        alert('Please fill in all fields.');
        return;
    }

    const newBook = {
        bookName: bookName,
        pages: pages,
        pdfFileName: pdfFile.name,
    };

    dummyBooks.push(newBook);

    displayDummyBooks();

    fetchBookCount();

    bookNameInput.value = '';

    fetchSortedBooks();
}