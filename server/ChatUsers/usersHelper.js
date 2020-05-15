const users = [{
  id: '1',
  username: 'Anshul',
},
{
  id: '2',
  username: 'Mayank',
},
{
  id: '3',
  username: 'Justin',
}
];

const addUser = ({ id, username, joinerName }) => {
  const existingUser = users.find(user => user.username === username);
  const user = { id, username, joinerName };
  if (!existingUser) {
    users.push(user);
  }
  return { user };
}

const getContactList = (username) => {
  const index = users.find(user => user.username === username);
  let cloneUsers = [...users];
  cloneUsers.splice(index, 1);
  return cloneUsers;
}
const removeUser = (id) => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
}

const getUser = (id) => users.find(user => user.id === id);

module.exports = { addUser, removeUser, getUser, getContactList };
