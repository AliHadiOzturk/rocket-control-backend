const Entity = require("./base")

class Telemetry extends Entity {
    constructor() {
        super()
        this.host = ""
        this.port = ""
    }

    decode = (json) => {
        this.id = json.id
        this.host = json.host
        this.port = json.port
    }
}
module.exports = Telemetry