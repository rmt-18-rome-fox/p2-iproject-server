// const { Weather } = require('../models')

class WeatherController {
  static async getCurrentWeather(req, res, next) {
    
    try {
      const newData = {
        city: req.body.city,
        weather: req.body.weather[0].main,
        description: req.body.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${req.body.weather[0].icon}@2x.png`,
        temp: req.body.parameter.temp,
        time: req.body.datetime,
      }
      
      res.status(200).json(newData)
    } catch (err) {
      next(err)
    }
  }
  static async getHistoryWeather(req, res, next) {

    try {
      
    } catch (err) {
      next(err)
    }
  }
  static async getForecastWeather(req, res, next) {

    try {
      
    } catch (err) {
      next(err)
    }
  }
}

module.exports = WeatherController