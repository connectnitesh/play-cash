import React from 'react';
import axios from 'axios';
import './style.css';
import ChatBox from './ChatBox';

function IdeaGenerator() {

    const sendMessage = async (message) => {
        try {
          const response = await axios.post('http://localhost:5000/chat', { message });
          const botResponse = response.data.message;
          
          // Handle the bot response in your React component
          console.log('Bot response:', botResponse);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
    
      const handleButtonClick = () => {
        // Send a message to the chatbot when the button is clicked
        sendMessage('Hello');
      };

  return (
    <div className="idea-generator">
      <div className="title-container">
        <h1 className="title">Idea Generator</h1>
      </div>

      <main className="content-container">
        <div className="entry-content">
          <p>Struggling to come up with a good idea for your startup? Use our AI bot to come up with some ideas.</p>

          <p className="info-text">
            When you find something you like, click to copy it. <span>You can then "Submit your Idea" by clicking here.</span>
          </p>

          <div className="button-group">
            <div className="idea-button">
              <a className="button-link">I want a startup in fintech</a>
            </div>
            <div className="idea-button">
              <a className="button-link">Suggest trendy business ideas</a>
            </div>
            <div className="idea-button">
              <a className="button-link">I want an edtech startup</a>
            </div>
            <div className="idea-button">
              <a className="button-link">I like cooking. Is that a business?</a>
            </div>
            <div className="idea-button">
              <a className="button-link">Give me a dating app idea</a>
            </div>
            <div className="idea-button">
              <a className="button-link">Give me random business idea</a>
            </div>
          </div>
        </div>
      </main>

      <ChatBox />
      <div className="chatbot-container" data-params='{...}'>
        {/* AI Chatbot content */}
      </div>
      <button onClick={handleButtonClick}>Send Message to Chatbot</button>
    </div>
  );
}

export default IdeaGenerator;

