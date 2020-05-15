import React, { useState, useEffect } from 'react';
import Conversation from './Conversation';
import Contacts from './Contacts';
import { ChatProvider } from './context/ChatContext';
import CONFIG from '../../config.json'
import io from 'socket.io-client';
import './css/Chat.css';

const ENTER_KEY = 13;
let socket;

const Chat = ({ location }) => {
  const [uname, setUname] = useState('');
  const [joinerName, setJoinerName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    let params = new URLSearchParams(location.search);
    const username = params.get('uname');
    setUname(username);
    socket = io(CONFIG.endpoint);
    if (joinerName) {
      socket.emit('joiningChat', { username, joinerName }, () => {
      });
      return () => {
        socket.emit('disconnect');
        socket.off();
      };
    }
  }, [CONFIG.endpoint, location.search, joinerName]);

  useEffect(() => {
    if (joinerName) {
      socket.on('message', (message) => {
        setMessages([...messages, message]);
      });
    }
  }, [messages, joinerName]);

  useEffect(() => {
    socket.on('showAllContacts', ({ users }) => {
      setContacts(users);
    });
  }, [location.search]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(contacts);

  return (
    <>
      <div className="container-fluid h-100" id="chat-conversation-section">
        <div className="row justify-content-center h-100">
          {/* contacts chat section start */}
          <div className="col-md-4 col-xl-3 chat">
            <Contacts
              onClick={(jn) => setJoinerName(jn)}
              joiner={joinerName}
              contacts={contacts}
            />
          </div>
          {/* contacts chat section end */}
          {/* conversation chat section start */}
          <div className="col-md-8 col-xl-6 chat">
            {joinerName ?
              <ChatProvider
                value={{
                  message: message,
                  onChange: (event) => setMessage(event.target.value),
                  sendMessage: (event) => sendMessage(event),
                  onKeyPress: event => (event.key === ENTER_KEY || event.which === ENTER_KEY) ? sendMessage(event) : null
                }}>
                <Conversation
                  joiner={joinerName}
                  messages={messages}
                  currentUser={uname}
                  />
              </ChatProvider>
            : <div className="card">
            <span className="text-white text-center selectUserMsg">Please select a user from left contact list to start chat.</span>
            </div>}

          </div>
          {/* conversation chat section end */}
          <div className="logout-btn btn">
            <a href="/"><span style={{ color: 'white' }}>Logout</span></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
