import React from 'react';
import SendMessageBar from './SendMessageBar';
import Messages from './Messages';

const Conversation = props => {
  return (
    <>
    {/* conversation card start */}
    <div className="card">
      <div className="card-header msg_head">
        {/* receiver user info start */}
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <div className="chatProfileImage"><span>{props.joiner.charAt(0).toUpperCase()}</span></div>
            <span className="online_icon"></span>
          </div>
          <div className="user_info">
            <span>{props.joiner}</span>
          </div>
        </div>
        {/* receiver user info end */}
      </div>
      <Messages messages={props.messages} currentUser={props.currentUser}/>
      <SendMessageBar />
    </div>
    {/* conversation card end */}
    </>
  );
}

export default Conversation;
