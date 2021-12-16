// const { Weather } = require('../models')

class WeatherController {
  static async getCurrentWeather(req, res, next) {
    
    try {
      let myDate = new Date(req.body.datetime*1000);
      // let newDate = myDate.replace(" GMT+0700 (Indochina Time)", "");
      // console.log(newDate,"<<<");
      const newData = {
        city: req.body.city,
        weather: req.body.dataWeather[0].main,
        description: req.body.dataWeather[0].description,
        icon: `http://openweathermap.org/img/wn/${req.body.dataWeather[0].icon}@2x.png`,
        temp: req.body.parameter.temp,
        press: `${req.body.parameter.pressure} hPa`,
        hum: `${req.body.parameter.humidity} %`,
        time: `${myDate.toLocaleString()}`,
        country: req.body.dataCountry.country
        // time: `${myDate}`,
      }
      
      res.status(200).json(newData)
    } catch (err) {
      next(err)
    }
  }
  static async getForecastWeather(req, res, next) {

    try {
      let myDate1 = new Date(req.body.day1.dt*1000);
      let myDate2 = new Date(req.body.day2.dt*1000);
      let myDate3 = new Date(req.body.day3.dt*1000);
      const newData = {
        cityName: req.body.cityName,
        countryCode: req.body.countryCode,
        day1: {
          time: `${myDate1.toLocaleString()}`,
          temp: req.body.day1.temp.day,
          press: `${req.body.day1.pressure} hPa`,
          hum: `${req.body.day1.humidity} %`,
          weather: req.body.day1.weather[0].main,
          description: req.body.day1.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${req.body.day1.weather[0].icon}@2x.png`,
        },
        day2: {
          time: `${myDate2.toLocaleString()}`,
          temp: req.body.day2.temp.day,
          press: `${req.body.day2.pressure} hPa`,
          hum: `${req.body.day2.humidity} %`,
          weather: req.body.day2.weather[0].main,
          description: req.body.day2.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${req.body.day2.weather[0].icon}@2x.png`,
        },
        day3: {
          time: `${myDate3.toLocaleString()}`,
          temp: req.body.day3.temp.day,
          press: `${req.body.day3.pressure} hPa`,
          hum: `${req.body.day3.humidity} %`,
          weather: req.body.day3.weather[0].main,
          description: req.body.day3.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${req.body.day3.weather[0].icon}@2x.png`,
        },

      }
      
      res.status(200).json(newData)
    } catch (err) {
      next(err)
    }
  }
  static async getHistoryWeather(req, res, next) {

    try {

      res.status(200).json(req.body)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = WeatherController