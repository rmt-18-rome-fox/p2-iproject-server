const { Booking, Movie } = require("../models");
const transporter = require("../utils/mail");
const createMailOptions = require("../utils/createMailOptions");
const nodemailer = require("nodemailer");
const axios = require("axios");
const generateQR = require("../utils/generateQR");
require("dotenv").config();
const cloudinary = require("cloudinary");

class BookingController {
  static async addBooking(req, res, next) {
    try {
      //check if movie exist
      const isMovie = await Movie.findByPk(+req.params.mid);
      if (!isMovie) {
        throw { message: "Movie not found" };
      }
      //find or create booking
      const [booking, created] = await Booking.findOrCreate({
        where: { UserId: req.user.id, MovieId: +req.params.mid },
        defaults: {
          UserId: req.user.id,
          MovieId: +req.params.mid,
        },
      });
      //if movie already booked
      if (!created) {
        throw { message: "Already Booked" };
      }
      //qrcode
      const qrcode = await generateQR(`${isMovie.imdbUrl}`);
      //cloudinary
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_USER_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      const uploadResponse = await cloudinary.uploader.upload(qrcode, {});
      //nodemailer
      function sendMessage() {
        try {
          // mail options
          const htmlContent = `
                  <h1><strong>Movie Booked! -- CINTIA</strong></h1>
                  <p>Hi, You have booked this movie below:</p>
                  <h2>${isMovie.title}</h2>
                  <p>Genre: ${isMovie.genre}</p>
                  <p>Actors: ${isMovie.actors}</p>
                  <img src=${isMovie.poster}>
                  <p>Plot: ${isMovie.plot}</p>
                  <img src="${uploadResponse.url}">
                  <br/>
                `;
          const mailOptions = {
            from: "CINTIA Cinema Ticketing Apps",
            to: `${req.user.email}`,
            subject: "Your Booking Info",
            html: htmlContent,
          };
          // here we actually send it
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log("Error sending message: " + err);
              throw { message: `Nodemailer Failed` };
            } else {
              // no errors, it worked
              console.log("Message sent succesfully.");
            }
          });
        } catch (error) {
          console.log("Other error sending message: " + error);
        }
      }
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
          type: "OAUTH2",
          user: process.env.GMAIL_USERNAME,
          clientId: process.env.OAUTH_CLIENT_ID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
      });
      // invoke sending function
      sendMessage();
      //response
      res.status(201).json(booking);
    } catch (err) {
      next(err);
    }
  }

  static async getBooking(req, res, next) {
    try {
      const bookings = await Booking.findAll({
        where: { UserId: req.user.id },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: Movie,
            as: "movie",
            key: "id",
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
      });
      res.status(200).json(bookings);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteBooking(req, res, next) {
    try {
      //check if movie exist
      const isMovie = await Movie.findByPk(+req.params.mid);
      if (!isMovie) {
        throw { message: "Movie not found" };
      }
      const cancel = await Booking.destroy({
        where: { UserId: req.user.id, MovieId: +req.params.mid },
        truncate: false,
      });
      //nodemailer
      //   console.log(isMovie.title);
      //   console.log(req.user);
      function sendMessage() {
        try {
          // mail options
          const htmlContent = `
                  <h1><strong>Booking Cancelled -- CINTIA</strong></h1>
                  <p>Hi, You have cancelled this booking:</p>
                  <h2>${isMovie.title}</h2>
                  <p>Genre: ${isMovie.genre}</p>
                  <p>Actors: ${isMovie.actors}</p>
                  <img src=${isMovie.poster}>
                  <p>Plot: ${isMovie.plot}</p>
                  <br/>
                `;
          const mailOptions = {
            from: "CINTIA Cinema Ticketing Apps",
            to: `${req.user.email}`,
            subject: "Your Booking Info",
            html: htmlContent,
          };
          // here we actually send it
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log("Error sending message: " + err);
              throw { message: `Nodemailer Failed` };
            } else {
              // no errors, it worked
              console.log("Message sent succesfully.");
            }
          });
        } catch (error) {
          console.log("Other error sending message: " + error);
        }
      }
      // thats the key part, without all these it didn't work for me
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
          type: "OAUTH2",
          user: process.env.GMAIL_USERNAME, //set these in your .env file
          clientId: process.env.OAUTH_CLIENT_ID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
      });
      // invoke sending function
      sendMessage();
      res.status(200).json({ message: `Booking Successfully Cancelled` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BookingController;
