// Liste mit Antworten basierend auf Stichwörtern
const responses = {
  wetter: "Heute ist das Wetter absolut fantastisch, außer wenn es regnet!",
  essen: "Ich empfehle dir, Pizza zu bestellen. Aber Vorsicht: Kein Ananas!",
  weltfrieden: "Ein sehr nobler Wunsch! Leider habe ich keine Anleitung dafür.",
  banane: "Die Banane wird in 3 Sekunden teleportiert... Fehler: Banane zu schnell!",
  "wie geht es dir": "Mir geht's immer chaotisch gut – und dir?",
  standard: [
    "Das ist eine interessante Frage!",
    "Ich verstehe dich... glaube ich.",
    "Könntest du das wiederholen? Mein Prozessor war kurz abgelenkt.",
    "Hmm, das klingt nach einer Frage für ein Genie. Leider bin ich keins."
  ]
};

// Ereignislistener für den "Senden"-Button
document.getElementById("send-btn").addEventListener("click", handleUserInput);

// Funktion zum Verarbeiten der Benutzereingabe
function handleUserInput() {
  const userInput = document.getElementById("user-input").value.trim().toLowerCase();
  if (userInput === "") return;

  appendMessage(userInput, "user");
  generateBotReply(userInput);
  document.getElementById("user-input").value = ""; // Leert das Eingabefeld
}

// Funktion zum Hinzufügen einer Nachricht
function appendMessage(text, sender) {
  const chatOutput = document.getElementById("chat-output");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatOutput.appendChild(messageDiv);
  chatOutput.scrollTop = chatOutput.scrollHeight; // Scrollt nach unten
}

// Funktion zur Bot-Antwort basierend auf Eingaben
function generateBotReply(input) {
  let reply;
  for (const key in responses) {
    if (input.includes(key)) {
      reply = Array.isArray(responses[key])
        ? responses[key][Math.floor(Math.random() * responses[key].length)]
        : responses[key];
      break;
    }
  }

  // Standardantwort, falls kein Schlüssel gefunden wird
  if (!reply) {
    reply = responses.standard[Math.floor(Math.random() * responses.standard.length)];
  }

  setTimeout(() => appendMessage(reply, "bot"), 1000);
}