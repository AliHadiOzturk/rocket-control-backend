const net = require('net');

//Get ip and port then create a tcp client

connections = []

const createConnection = (host, port, id, name, connectionType, receivedCallBack, statusCallBack) => {
    const client = new net.Socket();
    client.connect(port, host, function () {
        console.log('Connected to the ' + name);
        statusCallBack({ id: id, status: 'connected' });
    });

    client.on('data', function (data) {
        receivedCallBack({ id: id, name: name, type: connectionType, data: data })
    });

    client.on('close', function () {
        console.log(`Connection ${name} is closed`);
        statusCallBack({ id: id, status: 'closed' });
    });
}

module.exports = { createConnection }

