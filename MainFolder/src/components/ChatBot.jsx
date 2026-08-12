import React, { useState, useRef, useEffect } from 'react';
import { SYSTEM_PROMPT } from '../utils/resumeContext';

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi there! 💖 I am Vishnuvardhan's AI Assistant. How can I help you learn more about her amazing skills and experience?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Build the full message array including system prompt for context
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
        userMessage
      ];

      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://portfolio-backend-0xg7.onrender.com';
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Details:', response.status, errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message;

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Oops! 😅 Something went wrong: ${error.message}` }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-24 left-4 sm:left-6 w-[calc(100vw-2rem)] sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-3xl shadow-2xl z-[9999] flex flex-col overflow-hidden border border-gray-200 animate-fade-in-up font-sans">
      {/* Header */}
      <div className="bg-[#ff2a2a] p-4 text-white flex items-center justify-between shadow-md relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[#ff2a2a] text-lg shadow-inner">
            AI
          </div>
          <div>
            <h3 className="font-bold text-sm">Ask About Me ✨</h3>
            <p className="text-xs text-red-100">Vishnuvardhan's Assistant</p>
          </div>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-red-200 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                  ? 'bg-black text-white rounded-tr-none'
                  : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center shadow-sm">
              <div className="w-2 h-2 bg-[#ff2a2a] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#ff2a2a] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-[#ff2a2a] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-gray-100">
        <form onSubmit={handleSend} className="flex items-center gap-2 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-gray-100 text-black text-sm p-3 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff2a2a] transition-all"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-1 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
