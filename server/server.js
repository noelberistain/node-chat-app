const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const { generateMessage, generateLocationMessage } = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback("This is from the server.");
    });
    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', `${coords.latitude},
        ${coords.longitude}`));
    });


    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', function (message) {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage('Admin', 'New user joined'));
    });

    socket.on('disconnect', function () {
        console.log('User was disconnected');
    });

}); //end of -- io.on('connection', fun...

server.listen(port, () => {
    console.log(`server is up on port ${port}`);
});



// console.log(__dirname + '/../public');
// console.log(publicPath);