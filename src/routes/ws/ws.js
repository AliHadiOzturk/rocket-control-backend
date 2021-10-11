const eventHandler = require("../../utils/event/eventHandler");

const initWebSocket = (io) => {
    io.of('/ws')
        .on('connection', (socket) => {
            console.debug("New connection has made " + socket.id)
            socket.join('rocket');


            eventHandler.on('data', (data) => {
                socket.emit('data', data);
            })
            socket.on('disconnect', () => {
                console.debug("Connection disconnected " + socket.id)
                socket.leave('rocket');
            })
        })


}
module.exports = { initWebSocket }