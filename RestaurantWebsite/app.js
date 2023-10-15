// Get references to the navigation links
const homeLink = document.querySelector('a[href="index.html"]');
const menuLink = document.querySelector('a[href="menu.html"]');
const locationLink = document.querySelector('a[href="location.html"]');
const contactLink = document.querySelector('a[href="contact.html"]');

// Get references to the different sections
const homeSection = document.querySelector('.hero');
const menuSection = document.querySelector('.menu');
const locationSection = document.querySelector('.location');
const contactSection = document.querySelector('.contact');
const contactForm = document.querySelector('.contact-form');

// Function to show a section and hide others
function showSection(sectionToShow) {
    const sections = [homeSection, menuSection, locationSection, contactSection];

    sections.forEach((section) => {
        if (section === sectionToShow) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Event listeners for navigation links
homeLink.addEventListener('click', () => {
    showSection(homeSection);
});

menuLink.addEventListener('click', () => {
    showSection(menuSection);
});

locationLink.addEventListener('click', () => {
    showSection(locationSection);
});

contactLink.addEventListener('click', () => {
    showSection(contactSection);
});

// Event listener for contact form submission (if present)
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting
        // You can add code here to handle form submission, e.g., sending an email or storing the data in a database.
        // Example: alert('Form submitted!'); 
    });
}

// Show the home section by default
showSection(homeSection);
