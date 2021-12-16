const OpenWeather = require('../apis/openWeather')

const CurrentWeather = async (req, res, next) => {

  try {
    const { city, lat, lon } = req.body
    const api_key = process.env.OPEN_WEATHER_KEY
    const response = await OpenWeather({
      methode: "POST",
      url: `weather?q=${city}&appid=${api_key}&units=metric&lang=id`
    })
    
    req.body = {
      city: response.data.name,
      dataCountry: response.data.sys,
      dataWeather: response.data.weather,
      dataWind: response.data.wind,
      dataCloud: response.data.clouds.all,
      parameter: response.data.main,
      datetime: response.data.dt,
      timezone: response.data.timezone,
    }
    
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = CurrentWeather