import React from 'react';

const Contacts = props => {
  return (
    <>
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        {/* contacts list section start */}
        <div className="card-body contacts_body">
          <ul className="contacts">
            {/* contacts section start */}
            {props.contacts.map((contact, i) =>
              <li key={i} className={contact.username === props.joiner ? 'active' : ''} onClick={() => props.onClick(contact.username)}>
                <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <div className="chatProfileImage"><span>{contact.username.charAt(0).toUpperCase()}</span></div>
                  <span className="online_icon"></span>
                </div>
                  <div className="user_info">
                    <span>{contact.username}</span>
                  </div>
                </div>
              </li>
            )}

            {/* contacts list section end */}
          </ul>
        </div>
        {/* contacts list section end */}
      </div>
    </>
  );
}

export default Contacts;
