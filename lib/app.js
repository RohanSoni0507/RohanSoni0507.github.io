const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
let books = [
  {
    bookName: "The Catcher in the Rye",
    numPages: 277,
    pdfFile: "/pdfs/the_catcher_in_the_rye.pdf",
  },
];

// Dark mode state
let isDarkMode = false;

// Function to toggle dark mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode;

  // Determine the CSS class to apply based on the dark mode state
  const bodyClass = isDarkMode ? 'dark-mode' : '';

  // Apply or remove the 'dark-mode' class from the body
  document.body.className = bodyClass;
}

app.get('/', (req, res) => {
  res.render('index', { books, isDarkMode }); // Pass isDarkMode to the template
});

app.get('/add_book', (req, res) => {
  res.sendFile(path.join(__dirname, 'add_book.html'));
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

app.get('/book_count', (req, res) => {
    const bookCount = books.length;
    res.sendFile(path.join(__dirname, 'book_count.html')); // Send the HTML file directly
  });
  

app.get('/api/bookCount', (req, res) => {
  const bookCount = books.length;
  res.json({ bookCount });
});

app.get('/book_count', (req, res) => {
    const bookCount = books.length;
    res.sendFile(path.join(__dirname, 'book_count.html'));
});
  
app.get('/books_table', (req, res) => {
    const tableHTML = generateBooksTableHTML(books);
    res.send(tableHTML);
});
  
function generateBooksTableHTML(books) {
    let tableHTML = `
      <html>
      <head>
          <title>Books Table</title>
          <link rel="stylesheet" href="/styles.css">
          <script src="/app.js"></script> <!-- Add this line to include your client-side JavaScript -->
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
      tableHTML += `
        <tr>
          <td>${book.bookName}</td>
          <td>${book.numPages}</td>
          <td><a href="${book.pdfFile}" download="${book.bookName}.pdf">Download PDF</a></td>
        </tr>
      `;
    });
  
    tableHTML += `
              </tbody>
          </table>
          <a href="/">Back to Library</a>
      </body>
      </html>
    `;
  
    return tableHTML;
}

app.get('/sort_books_by_name', (req, res) => {
    books.sort((a, b) => a.bookName.localeCompare(b.bookName));
    const sortedTableHTML = generateBooksTableHTML(books);
    res.send(sortedTableHTML);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});