const router = require('express').Router()
const WeatherController = require('../controllers/weatherController')
const CurrentWeather = require('../middlewares/currentWeather')

router.post('/current', CurrentWeather, WeatherController.getCurrentWeather)
router.post('/history', WeatherController.getHistoryWeather)
router.post('/forecast', WeatherController.getForecastWeather)

module.exports = router