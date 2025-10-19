import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple chatbot route
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  let botReply = "";
  
  // Example smart reply
  if (!userMessage) {
    botReply = "Please say something!";
  } else if (userMessage.toLowerCase().includes("hello")) {
    botReply = "Hi there! 👋 How can I help you today?";
  } else if (userMessage.toLowerCase().includes("price")) {
    botReply = "Our products are affordable and high quality! 💰";
  } else {
    botReply = "I'm a chatbot, and I'm still learning! 😊";
  }
  
  res.json({ reply: botReply });
});

// Default route
app.get("/", (req, res) => {
  res.send("Chatbot backend is running successfully! ✅");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
