const Entity = require("./base")

class TimeStamps extends Entity {
    constructor() {
        super()
        this.launched = ""
        this.deployed = ""
        this.failed = ""
        this.cancelled = ""
    }

    decode = (json) => {
        this.id = json.id
        this.launched = json.launched
        this.deployed = json.deployed
        this.failed = json.failed
        this.cancelled = json.cancelled
    }
}
module.exports = TimeStamps