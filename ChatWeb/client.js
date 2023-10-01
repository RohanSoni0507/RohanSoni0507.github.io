const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (event) => {
    console.log('Connected to server');
});

socket.addEventListener('message', (event) => {
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.textContent = event.data;
    messages.appendChild(message);
});

document.getElementById('send').addEventListener('click', () => {
    const contactInfoInput = document.getElementById('contactInfo');
    const messageInput = document.getElementById('message');
    const contactInfo = contactInfoInput.value;
    const message = messageInput.value;
    
    if (contactInfo && message) {
        socket.send(message);
        alert(`Your message: "${message}" has been successfully sent to "${contactInfo}"`);
        messageInput.value = '';
    }
});