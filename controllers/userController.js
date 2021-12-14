const { Admin, User } = require("../models/index");
const { compareHash } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

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

module.exports = { adminRegister, adminLogin, userRegister, userLogin };
