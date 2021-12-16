const axios = require('axios')

const OpenWeather = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`,

})

module.exports = OpenWeather