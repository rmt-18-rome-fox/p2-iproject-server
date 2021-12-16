const OpenWeather = require('../apis/openWeather')

const ForecastWeather = async (req, res, next) => {

  try {
    const { city, lat, lon } = req.body
    const api_key = process.env.OPEN_WEATHER_KEY
    const response = await OpenWeather({
      methode: "POST",
      url: `forecast/daily?q=${city}&cnt=4&appid=${api_key}&units=metric&lang=id`
    })
    
    req.body = {
      cityName: response.data.city.name,
      countryCode: response.data.city.country,
      timezone: response.data.city.timezone,
      day1: response.data.list[1],
      day2: response.data.list[2],
      day3: response.data.list[3],
    }
    
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = ForecastWeather