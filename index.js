var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});


let mosca = require("mosca");
let settings = {
  port: PORT
};
let broker = new mosca.Server(settings);

broker.on("ready", () => {
  alert("Broker is ready!");
})
