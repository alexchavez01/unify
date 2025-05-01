"use client";
import React, { useState } from 'react';

function ScottyAI() {
  // State to hold messages
  const [messages, setMessages] = useState([
    { sender: 'AI', text: 'Hello! How can I help you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');

  // Handle user input
  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  // Handle message submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (userMessage.trim()) {
      // Add user message
      setMessages([
        ...messages,
        { sender: 'User', text: userMessage },
        { sender: 'AI', text: 'Let me think about that...' } // Placeholder for AI response
      ]);

      // Clear the input field
      setUserMessage('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-900 text-white p-4 rounded-t-lg">
        <h1 className="text-3xl font-semibold">Scotty AI</h1>
        <div className="text-xl">👤</div> {/* Placeholder for user avatar */}
      </div>

      {/* Chat Window */}
      <div className="flex-grow overflow-y-auto p-4 bg-white rounded-lg shadow-md max-h-[60vh]">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'User' ? 'text-right' : 'text-left'}>
              <div
                className={`p-3 rounded-lg ${
                  message.sender === 'User' ? 'bg-yellow-100' : 'bg-gray-200'
                }`}
              >
                <p className="text-sm text-gray-700">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-gray-200 p-4 rounded-b-lg flex items-center">
        <input
          type="text"
          value={userMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleSubmit}
          className="ml-4 p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ScottyAI;
