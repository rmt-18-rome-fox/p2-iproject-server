const nodemailer = require("nodemailer");
async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yoursyours123456@gmail.com",
      pass: "@abc12345",
    },
  });

  const mailOptions = {
    from: "'YOURS' yoursyours123456@gmail.com",
    to: `${email}`,
    subject: "Success Register",
    text: "Selamat anda telah terdaftar di website kami",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email terkirim`);
    }
  });
}

module.exports = sendEmail;
