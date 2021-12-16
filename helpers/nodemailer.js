const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(validationCode, email) {
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'jovantestingdev@gmail.com', // generated ethereal user
                pass: 'Iniadalahpassword', // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'Siapa Hayo', // sender address
            to: email, // list of receivers
            subject: "Account Verification", // Subject line
            text: `
            Please click this link to Verify your account 
            https://archiline.web.app/login?validate=${validationCode}
            `, // plain text body
        });

        console.log('SUCCESS KIRIM EMAIL <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<' )

    } catch (err) {
        console.log(err, '<<<<<<<<<<<< ini gagal kirim email')
    }
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  
}

module.exports = { 
    main 
}