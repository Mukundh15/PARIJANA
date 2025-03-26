function sendMessage() {
const userInput = document.getElementById("userInput").value;
if (userInput.trim() === "") return;
const chatBox = document.getElementById("chatBox");
const userMessage = document.createElement("div");
userMessage.classList.add("chat-message", "user");
userMessage.innerHTML = `<p>${userInput}</p>`;
chatBox.appendChild(userMessage);
  
document.getElementById("userInput").value = "";
 
setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");
  
    let botReply = "I'm not sure about that.";
    if (userInput.toLowerCase().includes("policy")) {
        botReply = "We offer multiple policy options. Which one are you interested in?";
    }else if(userInput.toLowerCase().includes("claim")) {
        botReply = "To file a claim, please visit the Claim Form page.";
    }else if(userInput.toLowerCase().includes("hello")) {
        botReply = "Hello! How can I assist you today?";
    }
    botMessage.innerHTML = `<p>${botReply}</p>`;
    chatBox.appendChild(botMessage);
  
    chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
  