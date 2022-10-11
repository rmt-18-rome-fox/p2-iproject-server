const OpenWeather = require('../apis/openWeather')

const CurrentWeather = async (req, res, next) => {

  try {
    const { city, lat, lng } = req.body
    const api_key = process.env.OPEN_WEATHER_KEY

    if(city) {
      baseUrl = `weather?q=${city}&appid=${api_key}&units=metric&lang=id`
    } else {
      baseUrl = `weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric&lang=id`
    }
    
    const response = await OpenWeather({
      methode: "POST",
      url: baseUrl
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