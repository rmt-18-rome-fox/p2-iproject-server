const { User, CoffeePowder, OrderDetail } = require('../models');
const { signToken, verifyToken } = require('../helpers/jwt');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const nodemailer = require('nodemailer');

const postRegister = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, address, phoneNumber } = req.body;
    const result = await User.create({ email, password, firstName, lastName, address, phoneNumber, role: 'customer' });
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'coffpow99@gmail.com',
        pass: `azmiftrd`,
      },
    });

    let notif = {
      from: 'coffpow99@gmail.com',
      to: result.email,
      subject: 'You just Register to our Website!',
      text: ` Congratulations!
              You already success register to Coffee Powder Website.
              
              Welcome to our Family!
      `,
    };

    transporter.sendMail(notif, (err, data) => {
      if (err) {
        console.log(`Email not send`);
      } else {
        console.log(`Email has been sent to ${result.email}`);
      }
    });
    res.status(201).json({ id: result.id, email: result.email, role: result.role });
  } catch (err) {
    next(err);
  }
};

const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw { name: 'emailIsRequired' };
    }

    if (!password) {
      throw { name: 'passwordIsRequired' };
    }

    const response = await User.findOne({ where: { email } });
    if (!response) {
      throw { name: 'wrongEmailPass' };
    }

    const isValid = comparePassword(password, response.password);
    if (!isValid) {
      throw { name: 'wrongEmailPass' };
    }

    const payload = { id: response.id, email: response.email, role: response.role };
    const access_token = signToken(payload);

    res.status(200).json({ access_token, email: response.email, role: response.role, id: response.id });
  } catch (err) {
    next(err);
  }
};

module.exports = { postRegister, postLogin };
