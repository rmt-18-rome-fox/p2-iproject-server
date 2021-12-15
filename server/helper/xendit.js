const Xendit = require('xendit-node')
const {XENDIT_SECRET_KEY} = process.env
const xenditInstance = new Xendit({
  secretKey: "xnd_development_HCrwDj66jpgIBIfUquFnBoSihVPKIIQXizrQLMRaqUVCDEkTF1HnhQp33aLcz"
})

module.exports = xenditInstance