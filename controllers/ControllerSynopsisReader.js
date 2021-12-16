const axios = require('axios')
const synopsisReader = async (req, res, next) => {
  try {
    console.log('masuk');
    const response = await axios.get(`http://api.voicerss.org/?key=${process.env.VOICERS_KEY}&hl=en-us&src='${req.headers.text}'&c=mp3&f=44khz_16bit_stereo&b64=true`)
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