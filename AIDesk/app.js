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

const projectsData = [
    {
        name: "Library Management System",
        image: "project1.jpg",
        website: "https://rohansoni0507.github.io/BookWise/",
    },
    {
        name: "Morse Code Translator",
        image: "project2.jpg",
        website: "https://rohansoni0507.github.io/MorseyCode/",
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

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});   


document.addEventListener('DOMContentLoaded', function () {
    createProjectCards();
});

const chatbox = document.getElementById('chatbox');
const startListeningButton = document.getElementById('start-listening');
const stopListeningButton = document.getElementById('stop-listening');

const recognition = new window.webkitSpeechRecognition();
recognition.continuous = true;

recognition.onstart = () => {
    sendMessage("Listening...");
    startListeningButton.disabled = true;
    stopListeningButton.disabled = false;
};

recognition.onend = () => {
    sendMessage("Listening stopped.");
    startListeningButton.disabled = false;
    stopListeningButton.disabled = true;
};

recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1][0].transcript.toLowerCase();
    sendMessage(`You: ${result}`);
    processCommand(result);
};

recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    sendMessage('Speech recognition error. Please try again.');
};

startListeningButton.addEventListener('click', () => {
    recognition.start();
});

stopListeningButton.addEventListener('click', () => {
    recognition.stop();
});

function sendMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}


function processCommand(command) {
    if (command.includes("open youtube")) {
        window.open("https://www.youtube.com/", '_blank');
    } else if (command.includes("open google")) {
        window.open("https://www.google.com/", '_blank');
    } else if (command.includes("open stack overflow")) {
        window.open("https://stackoverflow.com/", '_blank');
    } else if (command.includes("play music")) {
        window.open("https://www.youtube.com/watch?v=gR7iTCeZI0Y", '_blank');
    } else if (command.includes("open facebook")) {
        window.open("https://www.facebook.com/rohansoni0507?mibextid=nW3QTL", '_blank');
    } else if (command.includes("open instagram")) {
        window.open("https://www.instagram.com/rohansoni0507/?igshid=NGVhN2U2NjQ0Yg%3D%3D", '_blank');
    } else if (command.includes("open twitter")) {
        window.open("https://twitter.com/RohanSoni118254?t=IPXe6fEidR0cfmS4T5zZWw&s=09", '_blank');
    } else if (command.includes("open linkedin")) {
        window.open("https://www.linkedin.com/in/rohan-soni-963038224/", '_blank');
    } else if (command.includes("open github")) {
        window.open("https://github.com/RohanSoni0507", '_blank');
    } else if (command.includes("check weather")) {
        getWeather();
    } else if (command.includes("check news")) {
        getNews();
    } else if (command.includes("calculate")) {
        const expression = command.replace("calculate", "").trim();
        evaluateMathExpression(expression);
    } else {
        sendMessage("Command not recognized.");
    }
}

function getWeather() {
    const apiKey = '9eb0b841a2d427a6474c6f015b18bfea';
    const city = 'Chengalpattu';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const weatherDescription = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius

            const weatherMessage = `The weather in ${city} is currently ${weatherDescription} with a temperature of ${temperature}°C.`;
            sendMessage(weatherMessage);
        })
        .catch((error) => {
            console.error('Weather API error:', error);
            sendMessage('Unable to fetch weather information. Please try again.');
        });
}

function getNews() {
    const apiKey = '22782790a3864020b16621912d5ef144';
    const newsSource = 'bbc-news';
    const country = 'in';
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

    fetch(newsUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok' && data.articles.length > 0) {
                const newsArticles = data.articles;
                const newsMessage = 'Here are the latest news updates:\n';
                newsArticles.forEach((article, index) => {
                    newsMessage += `${index + 1}. ${article.title}\n`;
                });
                sendMessage(newsMessage);
            } else {
                sendMessage('Unable to fetch news updates. Please try again.');
            }
        })
        .catch((error) => {
            console.error('News API error:', error);
            sendMessage('Unable to fetch news updates. Please try again.');
        });
}

function evaluateMathExpression(expression) {
    try {
        const result = eval(expression);
        sendMessage(`Result: ${result}`);
    } catch (error) {
        console.error('Math expression evaluation error:', error);
        sendMessage('Invalid math expression. Please try again.');
    }
}