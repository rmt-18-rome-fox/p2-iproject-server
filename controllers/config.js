

const SANDBOX_BASE_URL = `https://api.sandbox.midtrans.com/v2`
const PRODUCTION_BASE_URL = `https://api.midtrans.com/v2`

class Config {
    static serverKey = "SB-Mid-server-3qGo9ieIwlQHXNn7ezFDGBvZ"
    static isProduction = false
    static is3ds = false
    static isSanitaized = false
}

module.exports = {
    Config
}