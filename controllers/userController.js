const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

const register = async (req, res, next) => {
  try {
    const { username, email, password, phoneNumber, address } = req.body
    const registeredUser = await User.create({ username, email, password, phoneNumber, address })
    res.status(201).json({ id: registeredUser.id, message: 'Register successful', email: registeredUser.email })
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email) throw { name: 'EmailError' }
    if (!password) throw { name: 'PasswordError' }

    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw { name: 'Invalid' }
    }
    if (!compare(password, user.password)) {
      throw { name: 'Invalid' }
    }
    const payload = { id: user.id, email: user.email, role: user.role, username: user.username }
    const token = generateToken(payload)
    res.status(200).json({ message: 'Login succesful', access_token: token, user_id: user.id, user_role: user.role, username: user.username })
  } catch (err) {
    next(err)
  }
}

googleLogin = async (req, res, next) => {
  try {
    const { user_token } = req.body
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    const ticket = await client.verifyIdToken({
      idToken: user_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()
    const { email, name } = payload

    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: {
        username: name,
        email: email,
        password: 'random' + (Math.random() + 1).toString(36),
        role: 'staff',
        phoneNumber: '+6282122267324',
        address: 'Indonesia',
      },
    })

    if (user) {
      const status = isCreated ? 201 : 200
      const access_token = generateToken({ id: user.id, email: user.email })

      res.status(status).json({ message: 'Login success!', access_token, user_id: user.id, user_role: user.role })
    } else throw { name: 'Invalid' }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { register, login, googleLogin }