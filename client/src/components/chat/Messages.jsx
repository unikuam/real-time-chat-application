import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({ messages, currentUser }) => {
  console.log(messages);
  return (
    <>
      {/* conversation body start */}
      <div className="card-body msg_card_body">
        {messages.map((message, index) => <div key={index}><Message message={message} currentUser={currentUser}/></div>)}
      </div>
      {/* conversation body end */}
    </>
  );
}

export default Messages;
