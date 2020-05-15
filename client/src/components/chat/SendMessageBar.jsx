import React from 'react';
import { ChatConsumer } from './context/ChatContext';

const SendMessageBar = () => {
  return (
      <ChatConsumer>
        {
          ({ message, onChange, sendMessage, onKeyPress }) => (
            <div className="card-footer">
              <div className="input-group">
                <div className="input-group-append">
                  <span className="input-group-text attach_btn">Attach</span>
                </div>
                <textarea
                  name="message"
                  value={message}
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                  className="form-control type_msg"
                  placeholder="Type your message..."
                />
                <div className="input-group-append">
                  <span className="input-group-text send_btn" onClick={sendMessage}>Send</span>
                </div>
              </div>
            </div>
          )
        }
      </ChatConsumer>
  );
}

export default SendMessageBar;
