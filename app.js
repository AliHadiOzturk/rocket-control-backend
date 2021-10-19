const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors');
const http = require('http').Server(app);

const { options } = require('./src/middlewares')
const { initWebSocket } = require('./src/routes/ws/ws');
const { rocketService } = require('./src/services');
const { eventHandler, collector } = require('./src/utils');


const host = process.env.HOST
const port = process.env.PORT

const io = require('socket.io')(http, {
  path: '/ws',
  transports: ['websocket'],
});

app.use(express.json())
app.use(cors())

initWebSocket(io)

app.use(options)

// app.use(routes)

http.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
  console.log("Initializing collector...")
  collector.Initiazlize()
});

