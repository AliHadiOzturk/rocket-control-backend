const base = require("./base")
path = "rockets"

const rockets = () => {
    return new Promise((resolve, reject) => {
        base.get(path).then(response => {
            if (response && response.data)
                resolve(response.data)
            else
                reject()
        })
    })
}

const launch = (id) => {
    return new Promise((resolve, reject) => {
        base.put(path + '/' + id + '/status/launched').then(response => {
            resolve(response.data)
        })
    })
}

const deploy = (id) => {
    return new Promise((resolve, reject) => {
        base.put(path + '/' + id + '/status/deployed').then(response => {
            resolve(response.data)
        })
    })
}

const cancelLaunch = (id) => {
    return new Promise((resolve, reject) => {
        base.del(path + '/' + id + '/status/cancelled').then(response => {
            resolve(response.data)
        })
    })
}

module.exports = { rockets, launch, deploy, cancelLaunch }