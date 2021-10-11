const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors');
const http = require('http').Server(app);

const { options } = require('./src/middlewares')
const services = require('./src/services');
const { ws } = require('./src/routes');
const { collector } = require('./src/utils');
const { initWebSocket } = require('./src/routes/ws/ws');


const host = process.env.HOST
const port = process.env.PORT

const io = require('socket.io')(http, {
  path: '/ws'
});

app.use(express.json())
app.use(cors())

initWebSocket(io)

app.use(options)

http.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
  console.debug('Starting collector')
  collector.Initiazlize()
});

