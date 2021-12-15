const { Admin, User } = require("../models/index");
const { compareHash } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "phase2.newshub@gmail.com",
    pass: `${process.env.NODEMAILER_KEY}`,
  },
  tls: {
    rejectUnauthorized: false
}
});

const adminRegister = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const newAdmin = await Admin.create({ email, password, role: "admin" });
    res.status(200).json({ id: newAdmin.id, email: newAdmin.email });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const userRegister = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.create({ email, password, role: "user" });

    let info = {
      from: "phase2.newshub@gmail.com", // sender address
      to: newUser.email, // list of receivers
      subject: "welcome to newshub", // Subject line
      text: `Welcome to newshub
      Hi,
      Your account has been created. Now it will be easier than ever to share!
      `,
    };

    transporter.sendMail(info, (err, data) => {
      if (err) {
        console.log(`Email not send`);
      } else {
        console.log(`Email has been sent`);
      }
    });

    res.status(200).json({ id: newUser.id, email: newUser.email });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw { name: "badRequest" };
    }
    const adminData = await Admin.findOne({ where: { email } });
    if (!adminData) {
      throw { name: "wrongLogin" };
    }

    const isValid = compareHash(password, adminData.password);
    if (!isValid) {
      throw { name: "wrongLogin" };
    }

    const payload = {
      id: adminData.id,
      email: adminData.email,
      role: adminData.role,
    };

    const token = signToken(payload);

    res.status(200).json({ access_token: token });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw { name: "badRequest" };
    }
    const userData = await User.findOne({ where: { email } });
    if (!userData) {
      throw { name: "wrongLogin" };
    }

    const isValid = compareHash(password, userData.password);
    if (!isValid) {
      throw { name: "wrongLogin" };
    }

    const payload = {
      id: userData.id,
      email: userData.email,
      role: userData.role,
    };

    const token = signToken(payload);

    res.status(200).json({ access_token: token });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  adminRegister,
  adminLogin,
  userRegister,
  userLogin,
};
