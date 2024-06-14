import React from 'react';

const Message = ({ message, onDelete }) => {
  const handleDelete = () => {
    onDelete(message.id);
  };

  return (
    <div className="Message">
      <span className="MessageText">{message.text}</span>
      <button className="DeleteButton" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Message;
