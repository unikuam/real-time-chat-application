import React from 'react';

const Message = ({ message: { user, text }, currentUser }) => {
  let sentByCurrentUser = false;
  if (user.toLowerCase() === currentUser.toLowerCase()) {
    sentByCurrentUser = true;
  }
  return (
      sentByCurrentUser ?
        (<div className='d-flex justify-content-end mb-4'>
          <div className='msg_cotainer_send'>
            {text}
            <span className="msg_time"></span>
          </div>
          <div className="img_cont">
            <div className="chatProfileImage"><span>{user.charAt(0).toUpperCase()}</span></div>
          </div>

        </div>) :
        (<div className='d-flex justify-content-start mb-4'>
          <div className="img_cont">
            <div className="chatProfileImage"><span>{user.charAt(0).toUpperCase()}</span></div>
          </div>
          <div className='msg_cotainer'>
            {text}
            <span className="msg_time"></span>
          </div>
        </div>)
  );
}

export default Message;
