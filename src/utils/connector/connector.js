const net = require('net');
const eventHandler = require('../event/eventHandler');

//Get ip and port then create a tcp client

const createConnection = (host, port, id, name, connectionType, receivedCallBack) => {
    const client = new net.Socket();
    client.connect(port, host, function () {
        console.log('Connected to the ' + name);
    });

    client.on('data', function (data) {
        receivedCallBack({ id: id, name: name, type: connectionType, data: data })
        // eventHandler.emit('data', );
    });

    client.on('close', function () {
        console.log(`Connection ${name} is closed`);
    });
}

module.exports = { createConnection }

