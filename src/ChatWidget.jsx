import React, { useState } from 'react';

function ChatWidget() {
  const [messages, setMessages] = useState([
    { text: 'How do I sell my license?', sender: 'user' },
    { text: 'You can sell your license by contacting our sales team.', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Mock response from AI
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'This is a response from the AI.', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="chat-widget fixed bottom-4 right-4 bg-secondary/40 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
      <div className="messages max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender} text-white mb-2`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="input-field w-full mb-2 bg-transparent border border-white/20 text-white placeholder-gray-400"
      />
      <button onClick={handleSend} className="btn-primary w-full bg-black text-white rounded-lg font-medium">Send</button>
    </div>
  );
}

export default ChatWidget;