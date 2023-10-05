// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
let books = [];

const dummyBooks = [
  {
    bookName: 'Book 1',
    pages: 200,
    pdfFileName: 'book1.pdf',
  },
  {
    bookName: 'Book 2',
    pages: 150,
    pdfFileName: 'book2.pdf',
  },
  {
    bookName: 'Book 3',
    pages: 300,
    pdfFileName: 'book3.pdf',
  },
  {
    bookName: 'Book 4',
    pages: 180,
    pdfFileName: 'book4.pdf',
  },
  {
    bookName: 'Book 5',
    pages: 250,
    pdfFileName: 'book5.pdf',
  },
];

books = [...dummyBooks];

// Quick Sort Function
function quickSort(arr) {
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

  return [...quickSort(left), pivot, ...quickSort(right)];
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/add_book', upload.single('pdfFile'), (req, res) => {
  const { bookName, pages } = req.body;
  const pdfFile = req.file;
  
  if (!bookName || !pages || !pdfFile) {
    return res.status(400).send('All fields are required.');
  }

  const newBook = {
    bookName,
    pages: parseInt(pages),
    pdfFileName: pdfFile.filename,
  };

  books.push(newBook);
  res.redirect('/');
});

app.get('/get_book_count', (req, res) => {
  res.send(books.length.toString());
});

app.get('/get_all_books', (req, res) => {
  res.send(books);
});

app.get('/get_sorted_books', (req, res) => {
  const sortedBooks = quickSort([...books]);
  res.send(sortedBooks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
