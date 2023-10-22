function openSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '0';
}

function closeSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '-300px';
}

const menuToggle = document.querySelector('.menu-toggle');
const closeMenuButton = document.querySelector('#close-menu');

menuToggle.addEventListener('click', openSlideInMenu);
closeMenuButton.addEventListener('click', closeSlideInMenu);

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const translationTextArea = document.getElementById('englishText');
    const translationOutput = document.getElementById('translation');
    const translateToMorseButton = document.getElementById('translateToMorse');
    const translateToEnglishButton = document.getElementById('translateToEnglish');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });

    translateToMorseButton.addEventListener('click', function () {
        const englishText = translationTextArea.value;
        const morseTranslation = translateToMorse(englishText);
        translationOutput.textContent = morseTranslation;
    });

    translateToEnglishButton.addEventListener('click', function () {
        const morseText = translationTextArea.value;
        const englishTranslation = translateToEnglish(morseText);
        translationOutput.textContent = englishTranslation;
    });

    function translateToMorse(text) {
        const englishToMorseMap = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
            'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
            'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
            '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
            '!': '-.-.--', '\'': '.----.', '\"': '.-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.',
            '/': '-..-.', '_': '..--.-', '=': '-...-', '+': '.-.-.', '-': '-....-', '$': '...-..-', '@': '.--.-.', ' ': '/'
        };
    
        text = text.toUpperCase();
        const words = text.split(' ');
    
        const morseWords = words.map(word => {
            const chars = word.split('');
            const morseChars = chars.map(char => {
                return englishToMorseMap[char] || char;
            });
            return morseChars.join(' ');
        });
    
        return morseWords.join(' / ');
    }
    
    function translateToEnglish(text) {
        const morseToEnglishMap = {
            '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
            '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
            '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
            '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '.-.-.-': '.',
            '--..--': ',', '..--..': '?', '-.-.--': '!', '.----.': '\'', '.-..-.': '\"', '-.--.': '(', '-.--.-': ')', '.-...': '&',
            '---...': ':', '-.-.-.': ';', '-..-.': '/', '..--.-': '_', '-...-': '=', '.-.-.': '+', '-....-': '-', '...-..-': '$',
            '.--.-.': '@', '/': ' '
        };
    
        const morseWords = text.split(' / ');
    
        const words = morseWords.map(morseWord => {
            const morseChars = morseWord.split(' ');
            const englishChars = morseChars.map(morseChar => {
                return morseToEnglishMap[morseChar] || morseChar;
            });
            return englishChars.join('');
        });
    
        return words.join(' ');
    }    
});

const projectsData = [
    {
        name: "Library Management System",
        image: "project1.jpg",
        website: "https://rohansoni0507.github.io/BookWise/",
    },
    {
        name: "Desktop Voice Assistant",
        image: "project2.jpg",
        website: "https://rohansoni0507.github.io/AIDesk/",
    },
    {
        name: "Round Robin Web Scheduler",
        image: "project3.jpg",
        website: "https://rohansoni0507.github.io/RRSim/",
    },
    {
        name: "Productivity Tracker",
        image: "project4.jpg",
        website: "https://rohansoni0507.github.io/ProductivityPro/",
    },
];

function createProjectCards() {
    const projectContainer = document.querySelector(".project-card-container");

    projectsData.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.name;

        const projectName = document.createElement("h3");
        projectName.textContent = project.name;

        const projectLink = document.createElement("a");
        projectLink.href = project.website;
        projectLink.textContent = "Visit Project";

        card.appendChild(image);
        card.appendChild(projectName);
        card.appendChild(projectLink);

        projectContainer.appendChild(card);
    });
}
createProjectCards();