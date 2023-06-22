// send email to user 
// package called nodemailer
// packagerequire 
// nodemailer initializer; transporter =>GMAIL
// transporter.sendMail()

const nodemailer = require("nodemailer");
const mailOptions ={
    from: '"Kim Eunhye" <rnita0891@gmail.com>', // sender address
    to: "shrestha.smile31@gmail.com, sinigdhathakur789@gmail.com", // list of receivers
    subject: "fantasy", // Subject line
    text: "so this is love ummhumm ?", // plain text body
    html: "<b>Hello world?</b>", // html body
};
const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 25,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'rnita0891@gmail.com',
      pass: '',
    },
});
// transporter.on('verify', () =>
// console.log('verified'))


const mailer = async (mailOptions,transporter) =>{
    console.log("sending email ....");
    const info = await transporter.sendMail(mailOptions);
    console.log({info: info.response});

};
 mailer (mailOptions, transporter).catch(console.error);