const { User } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();
const secretkey = process.env.SECRETKEY;
const jwt = require("jsonwebtoken");
// const { OAuth2Client } = require("google-auth-library");

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { message: "notFound" };
      } else {
        const user = await User.findOne({ where: { email }, raw: true });
        if (!user) {
          throw { message: "notFound" };
        } else {
          if (!bcrypt.compareSync(password, user.password)) {
            throw { message: "notFound" };
          } else {
            //kirim token
            const access_token = jwt.sign(user, secretkey);
            res.status(200).json({ access_token, user });
          }
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: `badRequest` };
      } else {
        const newUser = await User.create({
          email: email,
          password: password,
        });
        // console.log(newUser);
        res.status(201).json({ message: `new user registered` });
      }
    } catch (err) {
      next(err);
    }
  }
}
module.exports = UserController;
