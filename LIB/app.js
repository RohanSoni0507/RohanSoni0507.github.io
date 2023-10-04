const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// In-memory books array
let books = [
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
  res.sendFile(path.join(__dirname, 'book_count.html'));
});

app.get('/api/bookCount', (req, res) => {
  const bookCount = books.length;
  res.json({ bookCount });
});

app.get('/books_table', (req, res) => {
  // Generate HTML dynamically and send it as a response
  const htmlContent = generateBooksTableHTML(books);
  res.send(htmlContent);
});

app.get('/sort_books_by_name', (req, res) => {
  const sortedBooks = books.slice().sort((a, b) => a.bookName.localeCompare(b.bookName));
  const htmlContent = generateSortBooksHTML(sortedBooks);
  res.send(htmlContent);
});


function generateBooksTableHTML(books) {
  let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Books Table</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h2>All Books</h2>
        <table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Number of Pages</th>
              <th>Download PDF</th>
            </tr>
          </thead>
          <tbody>
  `;

  books.forEach(book => {
    htmlContent += `
      <tr>
        <td>${book.bookName}</td>
        <td>${book.numPages}</td>
        <td><a href="${book.pdfFile}" download="${book.bookName}.pdf">Download PDF</a></td>
      </tr>
    `;
  });

  htmlContent += `
          </tbody>
        </table>
        <a href="/">Back to Library</a>
      </body>
    </html>
  `;

  return htmlContent;
}

function generateSortBooksHTML(sortedBooks) {
  let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Books Sorted by Name</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Books Sorted by Name</h1>
        <ul>
  `;

  sortedBooks.forEach(book => {
    htmlContent += `
      <li>
        <strong>${book.bookName}</strong> by ${book.authorName}<br>
        Number of Pages: ${book.numPages}<br>
        Price: Rs ${book.price}<br>
        Published Year: ${book.publishDate}<br>
        <a href="${book.pdfFile}" download="${book.bookName}.pdf">Download PDF</a><br>
      </li>
    `;
  });

  htmlContent += `
        </ul>
        <a href="/">Back to Library</a>
      </body>
    </html>
  `;

  return htmlContent;
}

function toggleDarkMode() {
  // Implement your dark mode logic here
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
