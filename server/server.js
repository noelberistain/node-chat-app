const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', function (socket) {

    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'John',
        text: 'See you then',
        createdAt: 123123
    });

    socket.on('createMessage', function (message) {
        console.log('createMessage', message);
    });

    socket.on('createEmail', function (newEmail) {
        console.log('createEmail', newEmail);
    });

    socket.on('disconnect', function () {
        console.log('User was disconnected');
    })

}); //end of -- io.on('connection', fun...

server.listen(port, () => {
    console.log(`server is up on port ${port}`);

});



// console.log(__dirname + '/../public');
// console.log(publicPath);