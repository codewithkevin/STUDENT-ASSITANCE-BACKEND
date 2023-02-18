const nodemailer = require("nodemailer");

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

function sendConfirmationCode(email, confirmationCode) {
  const mailOptions = {
    from: "Quiz App",
    to: `${email}`,
    subject: "Confirmation Code",
    text: `Your confirmation code is ${confirmationCode}.`,
  };

 mailTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendConfirmationCode };
