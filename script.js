// app.js

// References to the DOM elements
const chatWindow = document.getElementById('chatWindow');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Function to append a message to the chat window
function appendMessage(message, isOwnMessage) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    messageElement.style.textAlign = isOwnMessage ? 'right' : 'left';
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        appendMessage(message, true);
        messageInput.value = '';
        // Here, you would also send the message to the server
    }
});

// Optional: Send message on Enter key press
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
