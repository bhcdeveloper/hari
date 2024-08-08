gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
    opacity: 0,
    y: -50,
    duration: 1
});

const sections = document.querySelectorAll("section");

sections.forEach((section, index) => {
    const offset = index % 2 === 0 ? -100 : 100;

    gsap.from(section.querySelector(".text"), {
        opacity: 0,
        x: offset,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(section.querySelector(".image"), {
        opacity: 0,
        x: -offset,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
});



















// Function to toggle the chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
}

// Function to send user messages
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    appendMessage('user', message);
    userInput.value = '';
    
    // Simulate bot response with typing animation
    simulateBotTyping();
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        appendMessage('bot', botResponse);
    }, 1000); // Adjust delay as needed
}

// Function to simulate bot typing
function simulateBotTyping() {
    const chatBox = document.getElementById('chat-box');
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('chat-message', 'bot', 'typing');
    typingIndicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    chatBox.appendChild(typingIndicator);

    // Automatically scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to append messages to the chat box
function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    // Remove typing indicator if it exists
    const typingIndicator = chatBox.querySelector('.typing');
    if (typingIndicator) {
        chatBox.removeChild(typingIndicator);
    }

    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    
    // Automatically scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate bot responses based on user input
function getBotResponse(message) {
    // Simple logic to generate bot responses based on user input
    message = message.toLowerCase();
    if (message.includes('hello') || message.includes('hi')) {
        return 'Hello there! How can I help you?';
    } else if (message.includes('how are you')) {
        return 'I am just a bot, but thanks for asking!';
    }
      else if (message.includes('what is your name')) {
         return 'I am bhc chat bot!';
      }else if (message.includes('WHAT IS YOUR NAME')) {
          return 'IAM BHC CHATBOT!';
      }
      else if (message.includes('WHAT CAN YOU DO')) {
        return 'IAM BHC CHATBOT HELP YOU FOR EDUCATION PURPOSE!';
    }else if (message.includes('WHAT IS YOUR NAME')) {
        return 'IAM BHC CHATBOT!';
    }
  
  
    
        else {
        return 'I apologize, but I am just a demo bot. I may not understand everything.';
    }
}


