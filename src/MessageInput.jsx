import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = () => {
    if (text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="MessageInput">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
