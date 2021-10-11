const base = require('./base');
const get = () => {
    return new Promise((resolve, reject) => {
        base.get('weather').then(weather => {
            resolve(weather);
        })
    })
}
module.exports = { weather: get }