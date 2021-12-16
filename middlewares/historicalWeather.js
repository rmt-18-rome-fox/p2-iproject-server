const OpenWeather = require('../apis/openWeather')

const HistoricalWeather = async (req, res, next) => {

  try {
    const { city, cityId, start, end, lat, lon } = req.body
    const api_key = process.env.OPEN_WEATHER_KEY
    const response = await OpenWeather({
      methode: "POST",
      url: `history/city?q=${city}&${cityId}&type=hour&start=${start}&end=${end}&appid=${api_key}&units=metric&lang=id`
    })
    console.log(response.data,"<<< DATA");
    req.body = {
      cityId: response.data.city_id,
      day1: response.data.list[0],
      day2: response.data.list[1],
      day3: response.data.list[2],
    }
    
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = HistoricalWeather