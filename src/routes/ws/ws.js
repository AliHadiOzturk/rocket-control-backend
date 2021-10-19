const eventHandler = require("../../utils/event/eventHandler");

const initWebSocket = (io) => {
    io.on("connection", (socket) => {
        console.debug("New connection has made " + socket.id)
        socket.join('rocket');

        eventHandler.on('rocket.data', (data) => {
            socket.emit('rocket.data', data);
        })
        eventHandler.on('rocket.status', (data) => {
            socket.emit('rocket.status', data);
        })
        socket.on('disconnect', () => {
            console.debug("Connection disconnected " + socket.id)
            socket.leave('rocket');
        })
    })
}
module.exports = { initWebSocket }