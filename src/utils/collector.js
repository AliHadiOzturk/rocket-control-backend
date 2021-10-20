const { enums, Rocket } = require("../models")
// const { rocketService } = require("../services")
const rocketService = require("../services/rocket")
const connector = require("./connector/connector")
const eventHandler = require("./event/eventHandler")



const receivedCallBack = (received) => {
    let data
    switch (received.type) {
        case enums.connectionTypes.ROCKET:
            data = new Rocket().decodeFromBytes(received.data)
            break;
        default:
            break;
    }
    if (data)
        eventHandler.emit('rocket.data', data)
    // }
}

const statusCallBack = (data) => {
    eventHandler.emit('rocket.status', { id: data.id, status: data.status });
}

const Initiazlize = () => {
    rocketService.rockets().then(res => {
        console.debug("Initializing rockets")
        for (const rocket of res) {
            connector.createConnection(rocket.telemetry?.host, rocket.telemetry?.port, rocket.id, rocket.model, enums.connectionTypes.ROCKET, receivedCallBack, statusCallBack)
        }
    }).catch(err => { Initiazlize() })
}

module.exports = { Initiazlize }