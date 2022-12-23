const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const { dirname } = require('path');
const server1 = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server1)


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/templates/chat.html");
});


io.on('connection', (Socket)=>{
    console.log("un usuario se conecto")

    Socket.on  ("chat message", (body)=>{
        io.emit("chat message", body);
    })

    Socket.on("disconnect", ()=>{
        console.log("usuario desconectado")
    })
})

server1.listen(8080, ()=>{
    console.log("play servidor1")
})