const { Payload, Telemetry, TimeStamps } = require(".")
const enums = require("./enums")
const decode = require("../utils/decoders/decoder")
const Entity = require("./base")
const { crc16 } = require("easy-crc")


const packet = [
    { name: 'Packet Start Byte', size: 1, position: 0, type: enums.dataTypes.BYTE },
    { name: 'Rocket Id', prop: 'id', size: 10, position: 1, type: enums.dataTypes.STRING },
    { name: 'Packet Number', size: 1, position: 11, type: enums.dataTypes.BYTE },
    { name: 'Packeg Size', size: 1, position: 12, type: enums.dataTypes.BYTE },
    { name: 'Altitude', prop: 'altitude', size: 4, position: 13, type: enums.dataTypes.FLOAT },
    { name: 'Speed', prop: 'speed', size: 4, position: 17, type: enums.dataTypes.FLOAT },
    { name: 'Acceleration', prop: 'acceleration', size: 4, position: 21, type: enums.dataTypes.FLOAT },
    { name: 'Thrust', prop: 'thrust', size: 4, position: 25, type: enums.dataTypes.FLOAT },
    { name: 'Temperature', prop: 'temperature', size: 4, position: 29, type: enums.dataTypes.FLOAT },
    { name: 'CRC16', size: 2, position: 33, type: enums.dataTypes.SHORT },
    { name: 'Delimeter', size: 1, position: 35, type: enums.dataTypes.BYTE },
]

class Rocket extends Entity {
    constructor() {
        super()
        this.model = ""
        this.mass = ""
        this.payload = null
        this.telemetry = null
        this.status = ""
        this.timestamps = null
        this.altitude = 0.0
        this.speed = 0.0
        this.acceleration = 0.0
        this.thrust = 0.0
        this.temperature = 0.0
    }

    decode = (json) => {
        this.id = json.id
        this.model = json.model
        this.mass = json.mass
        this.payload = new Payload().decode(json.payload)
        this.telemetry = new Telemetry().decode(json.telemetry)
        this.status = json.status
        this.timestamps = new TimeStamps().decode(json.timestamps)
        this.altitude = json.altitude
        this.speed = json.speed
        this.acceleration = json.acceleration
        this.thrust = json.thrust
        this.temperature = json.temperature
    }

    decodeFromBytes = (buffer) => {
        for (let p of packet) {
            const val = decode(buffer, p)
            if (p.name === 'CRC16') {
                const sliced = buffer.slice(0, buffer.length - 3)
                const crc = crc16('BUYPASS', sliced)
                if (crc !== val)
                    return null
            }
            if (p.prop) {
                this[p.prop] = val
            }
        }
        return this;
    }
}
module.exports = Rocket