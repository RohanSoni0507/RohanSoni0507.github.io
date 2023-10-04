// app.js

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

const books = [
  {
    bookName: "The Catcher in the Rye",
    numPages: 277,
    pdfFile: "/pdfs/the_catcher_in_the_rye.pdf",
  },
  // Add other books with similar structure
];

app.get('/', (req, res) => {
  res.render('index', { books });
});

app.post('/add_book', upload.single('pdfFile'), (req, res) => {
    const { bookName, pages } = req.body;
    const pdfFile = req.file ? req.file.path : null;

    const book = {
        bookName,
        numPages: pages,
        pdfFile,
    };

    books.push(book);
    res.redirect('/');
});

app.get('/count_books', (req, res) => {
  const bookCount = books.length;
  res.render('book_count', { bookCount });
});

app.get('/books_table', (req, res) => {
  res.render('books_table', { books });
});

app.get('/sort_books_by_name', (req, res) => {
    const sortedBooks = books.slice().sort((a, b) => a.bookName.localeCompare(b.bookName));
    res.render('sort_books_by_name', { title: 'Books Sorted by Name', books: sortedBooks });
  });


function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
