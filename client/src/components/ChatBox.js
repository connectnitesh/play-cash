import React, { useState } from 'react';

function ChatBox() {
  const [inputValue, setInputValue] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = () => {
    const message = inputValue.trim();
    if (message === '') return;

    setInputValue('');
    setChatMessages(prevMessages => [...prevMessages, { text: message, type: 'user' }]);
    setChatMessages(prevMessages => [...prevMessages, { type: 'loading' }]);

    fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then(response => response.json())
      .then(data => {
        setChatMessages(prevMessages => [...prevMessages, { text: data.message, type: 'response' }]);
      })
      .catch(error => console.error('Error:', error))
      .finally(() => {
        setChatMessages(prevMessages => prevMessages.filter(msg => msg.type !== 'loading'));
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-box-body">
        {chatMessages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-field">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
