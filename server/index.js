const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const router = require('./router');
const mongoose = require('mongoose');
const { addUser, removeUser, getUser, getContactList } = require('./ChatUsers/usersHelper');
// mongoose.connect('mongodb://localhost/chatUsers', {
//     useNewUrlParser: true
// }).then(() => console.log('connected to MongoDB.....'))
//         .catch(err => console.error('Could not connect to mongoDB...', err));

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socket.on('joiningChat', ({ username, joinerName }, callback) => {
    const { user } = addUser({ id: socket.id, username, joinerName });
    socket.emit('message', { user: 'admin', text: 'welcome' });
    io.emit('showAllContacts', { users: getContactList(username) });
    socket.join(joinerName);
    callback();
  });


  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.joinerName).emit('message', { user: user.username, text: message });
    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    console.log('disconnected');
  });
});

app.use(router);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
