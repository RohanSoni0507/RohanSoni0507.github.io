// Example data (you should replace this with actual data from your library):
const libraryData = [
  { name: 'Book A', pages: 200, pdfLink: 'booka.pdf' },
  { name: 'Book B', pages: 150, pdfLink: 'bookb.pdf' },
  // Add more book data here
];



// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('darkModeToggle');
  body.classList.toggle('dark-mode');
  const darkModeLabel = document.querySelector('.dark-mode-label');
  darkModeLabel.textContent = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
  darkModeToggle.checked = body.classList.contains('dark-mode');
}

function countBooks() {
  const bookCountElement = document.getElementById('bookCount');
  console.log(libraryData); // Log the libraryData to check its content
  bookCountElement.textContent = libraryData.length;
  console.log('countBooks function called');
}

// Function to display all books in a table
function displayBooks() {
  const bookTable = document.getElementById('bookTable');
  bookTable.innerHTML = ''; // Clear existing table data
  for (const book of libraryData) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.name}</td>
      <td>${book.pages}</td>
      <td><a href="${book.pdfLink}" target="_blank">Download</a></td>
    `;
    bookTable.appendChild(row);
  }
}

// Function to sort and display books by name
function sortBooksByName() {
  const sortedBooksList = document.getElementById('sortedBooksList');
  sortedBooksList.innerHTML = ''; // Clear existing sorted book list
  const sortedData = [...libraryData];
  sortedData.sort((a, b) => a.name.localeCompare(b.name));

  for (const book of sortedData) {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    sortedBooksList.appendChild(listItem);
  }
}

// Attach event listeners
document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);

// Check the current page and apply the relevant functionality
const currentUrl = window.location.href;
if (currentUrl.includes('bookcount.html')) {
  countBooks();
} else if (currentUrl.includes('booktable.html')) {
  displayBooks();
} else if (currentUrl.includes('sortbook.html')) {
  sortBooksByName();
}



const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;

menuToggle.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});