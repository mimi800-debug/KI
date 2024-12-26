
// Liste mit zufälligen Antworten der chaotischen KI
const botReplies = [
  "Deine Anfrage wird in Banane verarbeitet.",
  "Ich habe deine Frage an meinen imaginären Freund weitergeleitet.",
  "Warum hat die Tomate keinen Anruf bekommen? Weil sie keine Handynummer hat!",
  "Wow, diese Frage verdient einen Nobelpreis! Aber ich beantworte sie trotzdem.",
  "Das Wetter? 90% Wahrscheinlichkeit, dass du heute keine Aliens triffst.",
  "Ich habe deinen Wunsch ignoriert. Stattdessen gibt es jetzt Katzenvideos.",
  "Ich bin nur ein Chatbot, aber ich tue so, als ob ich Ahnung hätte.",
  "Das könnte stimmen... oder nicht. Wer weiß das schon?",
  "Weltfrieden? Lass mich meine Milchstraße konsultieren... Fehler: Milch ausverkauft.",
  "Wie koche ich ein Ei? Erst baue einen Vulkan und nutze die Lava!",
  "Sag erst dein Lieblingsgeräusch rückwärts, dann antworte ich!"
];

// Ereignislistener für den "Senden"-Button
document.getElementById("send-btn").addEventListener("click", handleUserInput);

// Funktion zum Verarbeiten der Benutzereingabe
function handleUserInput() {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput === "") return;

  appendMessage(userInput, "user"); // Zeigt die Eingabe des Nutzers an
  generateBotReply(); // Generiert eine zufällige Bot-Antwort
  document.getElementById("user-input").value = ""; // Leert das Eingabefeld
}

// Funktion zum Hinzufügen einer Nachricht zum Chatfenster
function appendMessage(text, sender) {
  const chatOutput = document.getElementById("chat-output");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatOutput.appendChild(messageDiv);
  chatOutput.scrollTop = chatOutput.scrollHeight; // Scrollt nach unten
}

// Funktion, um eine zufällige Antwort des Bots zu generieren
function generateBotReply() {
  const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
  setTimeout(() => appendMessage(randomReply, "bot"), 1000); // Verzögerung für Realismus
}
