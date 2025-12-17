import React from 'react';
function MessageCard({title, message}) {
    return (
        <div className="message-card">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}
export default MessageCard;