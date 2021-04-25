const nodemailer = require("nodemailer");

const sendMail = (_name, _text, cb) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "an.ji.do.ggy@gmail.com",
      pass: "01672548468;:Doggy",
    },
  });

  const mailOptions = {
    from: "an.ji.do.ggy@gmail.com",
    to: "nhu.nhu.face@gmail.com",
    subject: `New Contact from ${_name} via Portfolio`,
    text: _text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      cb();
    }
  });
};
module.exports = sendMail;
