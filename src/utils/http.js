const axios = require('axios')
// const process = require('process')

const config = {
    host: process.env.MILTRON_API_HOST,
}
const client = axios.create({
    baseURL: `http://${config.host}/`,
    responseType: 'json',
    headers: {
        'X-API-Key': 'API_KEY_1'
    }
})

const get = async (endpoint) => {
    return new Promise((resolve, reject) => {
        client.get(endpoint)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
const post = async (endpoint, data) => {
    return new Promise((resolve, reject) => {
        client.post(endpoint, data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
const put = async (endpoint, data) => {
    return new Promise((resolve, reject) => {
        client.put(endpoint, data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
const del = async (endpoint) => {
    return new Promise((resolve, reject) => {
        client.del(endpoint)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}




module.exports = { get, post, put, del }


