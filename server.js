var express = require('express')
var http = require('http')
var WebSocket = require('ws')

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        var timeoutId = setTimeout(() => {
            console.log('received: %s', message);
            ws.send(`Hello, you sent -> ${message}`);
        }, 1000);
        // clearTimeout(timeoutId)
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('您好，请问有什么可以为您服务？');
});

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});