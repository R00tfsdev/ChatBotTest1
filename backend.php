<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userMessage = $_POST['userMessage'];
    $botResponse = generateBotResponse();
    echo $botResponse;
}

function generateBotResponse() {
    // Predefined list of words
    $words = array('hello', 'world', 'chatbot', 'generate', 'response', 'words');

    // Select a random word from the list
    $randomWord = $words[array_rand($words)];

    // Build the bot's response
    $botResponse = "Bot: $randomWord";

    return $botResponse;
}
?>
