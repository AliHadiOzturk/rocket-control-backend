const http = require("../utils/http")


function retry(fn) {
    return fn() // returns a promise (promise#1)
        .catch(() => fn()) // returns a new promise (promise#2)
        .catch(() => fn()) // returns yet a new promise (promise#3)
        .catch(() => {
        });
}

const get = (endpoint) => {
    return retry(() => http.get(endpoint))
}
const post = (endpoint, data) => {
    return retry(() => http.post(endpoint, data))
}
const put = (endpoint, data) => {
    return retry(() => http.put(endpoint, data))
}
const del = (endpoint) => {
    return retry(() => http.del(endpoint))
}

module.exports = { get, post, put, del }