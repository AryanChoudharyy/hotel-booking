document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function appendMessage(content, className) {
  const chatWindow = document.getElementById('chat-window');
  const messageElement = document.createElement('div');
  messageElement.className = `chat-message ${className}`;
  messageElement.textContent = content;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value;
  if (message.trim() === '') return;
  
  appendMessage(message, 'user');
  input.value = '';

  try {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message, sessionId: sessionStorage.getItem('sessionId') })
    });

    const data = await response.json();
    sessionStorage.setItem('sessionId', data.sessionId);

    appendMessage(data.response, 'assistant');
  } catch (error) {
    appendMessage('Error: Unable to send message.', 'assistant');
    console.error('Error:', error);
  }
}
