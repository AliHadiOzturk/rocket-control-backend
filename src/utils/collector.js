const { enums, Rocket } = require("../models")
const { rocketService } = require("../services")
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
    eventHandler.emit('data', data)
    // }
}


const Initiazlize = () => {
    // rocketService.getRockets().then(res => {
    //     console.debug("Initializing rockets")
    //     for (const rocket of res) {
    //         connector.createConnection(rocket.telemetry?.host, rocket.telemetry?.port, rocket.id, rocket.model, enums.connectionTypes.ROCKET, receivedCallBack)
    //         console.debug("-----------------")
    //     }
    // })
}

module.exports = { Initiazlize }