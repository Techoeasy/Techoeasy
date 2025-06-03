import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatbotIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      text: 'Hi there! I\'m the TechoEasy AI assistant. How can I help you today?'
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() === '') return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { sender: 'user', text: message }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          sender: 'bot', 
          text: 'Thanks for your message! This is a demo of our chatbot interface. In the actual platform, our AI would provide helpful information about TechoEasy features and capabilities.'
        }
      ]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden z-40"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat header */}
            <div className="bg-primary text-white p-4">
              <div className="flex items-center">
                <MessageCircle size={20} className="mr-2" />
                <h3 className="font-medium">TechoEasy AI Assistant</h3>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3/4 rounded-lg p-3 ${
                      chat.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {chat.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  className="bg-primary text-white p-2 rounded-r-md"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotIcon;