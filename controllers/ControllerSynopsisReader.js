const axios = require('axios')
const synopsisReader = async (req, res, next) => {
  try {
    const {text} = req.body
    let str = text.replace(/[^a-zA-Z0-9 ]/g, ' ');
    str = str.split("").slice(0, 100).join("")
    console.log({str});
    const response = await axios.get(`http://api.voicerss.org/?key=${process.env.VOICERS_KEY}&hl=en-us&src='${str}'&c=mp3&f=44khz_16bit_stereo&b64=true`)
    res.status(200).json({
      msg: "Success text to speech",
      data: response.data
    })
  } catch (err) {
    console.log({err});
    next(err)
  }
}

module.exports = {synopsisReader}