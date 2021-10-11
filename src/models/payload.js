const Entity = require("./base")

class Payload extends Entity {
    constructor() {
        super()
        this.description = ""
        this.weight = 0
    }

    decode = (json) => {
        this.id = json.id
        this.description = json.description
        this.weight = json.weight
    }
}
module.exports = Payload