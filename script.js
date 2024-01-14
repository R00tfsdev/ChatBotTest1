// script.js
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatBox = document.getElementById('chatBox');

    // Display user message
    chatBox.innerHTML += `<div>User: ${userInput}</div>`;

    // Send user message to PHP backend
    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `userMessage=${userInput}`,
    })
    .then(response => response.text())
    .then(botResponse => {
        // Display bot response
        chatBox.innerHTML += `<div>${botResponse}</div>`;
    })
    .catch(error => console.error('Error:', error));

    // Clear input field
    document.getElementById('userInput').value = '';
}
