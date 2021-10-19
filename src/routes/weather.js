const { weatherService } = require('../services')

const router = require('express').Router()


router.get('/', (req, res) => {
    weatherService.weather().then(weather => {
        res.json(weather)
    })
})