const chatbox = document.getElementById('chatbox');
const startListeningButton = document.getElementById('start-listening');
const stopListeningButton = document.getElementById('stop-listening');
const darkModeToggle = document.getElementById('darkModeToggle');

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

function toggleDarkMode() {
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });
}

toggleDarkMode();