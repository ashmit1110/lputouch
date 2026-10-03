import React from 'react';

const MessageCard = ({ message }) => {
  return (
    <div className={`message-card ${message.isOverlapping ? 'overlapping-card' : ''}`}>
      <div className="message-title" dangerouslySetInnerHTML={{ __html: message.title }}></div>
      <div className="message-body">
        {message.isOverlapping ? (
          <div className="overlapping-text" dangerouslySetInnerHTML={{ __html: message.body }}>
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: message.body }}></div>
        )}
      </div>
      <div className="message-footer">{message.footer}</div>
      {message.extraContent && (
        <div className="message-extra">
          {message.extraContent.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageCard;
