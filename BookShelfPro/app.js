const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

const books = [{
        bookName: "The Catcher in the Rye",
        authorName: "J.D. Salinger",
        numPages: 277,
        price: 1500,
        publishDate: "1951"
    },
    {
        bookName: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        numPages: 336,
        price: 1200,
        publishDate: "1960"
    },
    {
        bookName: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        numPages: 180,
        price: 800,
        publishDate: "1925"
    },
    {
        bookName: "1984",
        authorName: "George Orwell",
        numPages: 328,
        price: 1500,
        publishDate: "1949"
    },
    {
        bookName: "Pride and Prejudice",
        authorName: "Jane Austen",
        numPages: 432,
        price: 900,
        publishDate: "1813"
    },
    {
        bookName: "The Hobbit",
        authorName: "J.R.R. Tolkien",
        numPages: 310,
        price: 1100,
        publishDate: "1937"
    },
    {
        bookName: "The Alchemist",
        authorName: "Paulo Coelho",
        numPages: 208,
        price: 800,
        publishDate: "1988"
    },
    {
        bookName: "The Hunger Games",
        authorName: "Suzanne Collins",
        numPages: 374,
        price: 1400,
        publishDate: "2008"
    },
    {
        bookName: "The Da Vinci Code",
        authorName: "Dan Brown",
        numPages: 454,
        price: 1250,
        publishDate: "2003"
    },
    {
        bookName: "The Lord of the Rings",
        authorName: "J.R.R. Tolkien",
        numPages: 1178,
        price: 2000,
        publishDate: "1954"
    },
    {
        bookName: "The Shining",
        authorName: "Stephen King",
        numPages: 447,
        price: 1300,
        publishDate: "1977"
    },
    {
        bookName: "Brave New World",
        authorName: "Aldous Huxley",
        numPages: 325,
        price: 1100,
        publishDate: "1932"
    },
    {
        bookName: "The Road",
        authorName: "Cormac McCarthy",
        numPages: 287,
        price: 1200,
        publishDate: "2006"
    },
    {
        bookName: "Moby-Dick",
        authorName: "Herman Melville",
        numPages: 635,
        price: 1400,
        publishDate: "1851"
    },
    {
        bookName: "The Road Less Traveled",
        authorName: "M. Scott Peck",
        numPages: 316,
        price: 1000,
        publishDate: "1978"
    }
];
app.get('/', (req, res) => {
    res.render('index', { books });
});
app.post('/add_book', (req, res) => {
    const { bookName, authorName, pages, price, publishedYear } = req.body;
    const book = { bookName, authorName, numPages: pages, price, publishDate: publishedYear };
    books.push(book);
    res.redirect('/');
});
app.post('/delete_book', (req, res) => {
    const index = req.body.index;
    if (index >= 0 && index < books.length) {
        books.splice(index, 1);
    }
    res.redirect('/');
});
app.get('/count_books', (req, res) => {
    const bookCount = books.length;
    res.render('book_count', { bookCount });
});
app.get('/books_table', (req, res) => {
    res.render('books_table', { books });
});
app.post('/sort_books_by_author', (req, res) => {
    books.sort((a, b) => a.authorName.localeCompare(b.authorName));
    res.render('sort_books_by_author', { title: 'Books Sorted by Author', books });
});
app.post('/sort_books_by_price', (req, res) => {
    books.sort((a, b) => a.price - b.price);
    res.render('sort_books_by_price', { title: 'Books Sorted by Price', books });
});
app.post('/sort_books_by_year', (req, res) => {
    books.sort((a, b) => a.publishDate - b.publishDate);
    res.render('sort_books_by_year', { title: 'Books Sorted by Year', books });
});
app.post('/sort_books_by_name', (req, res) => {
    books.sort((a, b) => a.bookName.localeCompare(b.bookName));
    res.render('sort_books_by_name', { title: 'Books Sorted by Name', books });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});