'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the MS Infinex AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('services') || lowerInput.includes('what do you do')) {
      return "We specialize in Digital Marketing, Web Development, Social Media Management, and Paid Ads. You can explore our full range in the Services section!";
    }
    if (lowerInput.includes('contact') || lowerInput.includes('hiring') || lowerInput.includes('work')) {
      return "You can reach us at reachus@msinfinex.com or call us at +91 92511 48882. We'd love to hear from you!";
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
      return "Every project is unique! Click the 'Get a Quote' button on our homepage for a custom proposal tailored to your needs.";
    }
    return "That's interesting! Would you like to speak with one of our human experts directly? I can provide our contact details.";
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="chatbot-window"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="flex items-center gap-3">
                <div className="bot-avatar">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Infinex AI</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="online-indicator" />
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Active Now</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="close-btn"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message-row ${msg.sender}`}>
                  <div className="message-bubble">
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} className="send-btn">
                <Send size={18} />
              </button>
            </div>
            
            <div className="chatbot-footer">
              <Sparkles size={10} className="text-zinc-500" />
              <span>Powered by Infinex Engine</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="notification-dot" />}
      </button>

      <style jsx>{`
        .chatbot-wrapper {
          position: relative;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }

        .chatbot-toggle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .chatbot-toggle:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 138, 0, 0.5);
          box-shadow: 0 15px 40px rgba(255, 138, 0, 0.2);
        }

        .notification-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 12px;
          height: 12px;
          background: #ff5c00;
          border-radius: 50%;
          border: 2px solid #000;
        }

        .chatbot-window {
          width: 360px;
          height: 500px;
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
        }

        .chatbot-header {
          padding: 20px;
          background: #111;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bot-avatar {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ff8a00 0%, #ff5c00 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .online-indicator {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
        }

        .close-btn {
          color: #555;
          cursor: pointer;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: white;
        }

        .chatbot-messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .message-row {
          display: flex;
          width: 100%;
        }

        .message-row.user {
          justify-content: flex-end;
        }

        .message-bubble {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.5;
        }

        .bot .message-bubble {
          background: #1a1a1a;
          color: #eee;
          border-bottom-left-radius: 4px;
        }

        .user .message-bubble {
          background: #ff5c00;
          color: white;
          border-bottom-right-radius: 4px;
        }

        .chatbot-input {
          padding: 16px;
          background: #111;
          display: flex;
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .chatbot-input input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          font-size: 14px;
          outline: none;
        }

        .send-btn {
          padding: 8px;
          color: #ff5c00;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .send-btn:hover {
          transform: scale(1.1);
        }

        .chatbot-footer {
          padding: 10px;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 10px;
          color: #444;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 480px) {
          .chatbot-window {
            width: calc(100vw - 40px);
            right: 20px;
            bottom: 110px;
            height: 450px;
          }
          .chatbot-wrapper {
            right: 20px;
            bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
