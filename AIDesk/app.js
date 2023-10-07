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
    } else {
        sendMessage("Command not recognized.");
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