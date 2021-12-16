const router = require('express').Router()
const WeatherController = require('../controllers/weatherController')
const CurrentWeather = require('../middlewares/currentWeather')
const ForecastWeather = require('../middlewares/forecastWeather')
const HistoricalWeather = require('../middlewares/historicalWeather')

router.post('/current', CurrentWeather, WeatherController.getCurrentWeather)
router.post('/forecast', ForecastWeather, WeatherController.getForecastWeather)
router.post('/history', HistoricalWeather, WeatherController.getHistoryWeather)

module.exports = router