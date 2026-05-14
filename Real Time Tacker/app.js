const express = require('express');
const app = express();
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server) //if server wokring, server and socket io are connected

//Now we have to configure ejs
app.set('view engine', 'ejs') // telling app to use ejs as view engine
app.use(express.static(path.join(__dirname, "public"))) //setting public folder as static folder

io.on('connection', function(socket) {
  socket.on('send-location', function(data){
    io.emit('receive-location', {id: socket.id, ...data})
  })
  socket.on('disconnect', () => {
    io.emit('user-disconnected', socket.id);
  })
})

app.get('/', function (req, res){
  res.render("index")
})
server.listen(3000)