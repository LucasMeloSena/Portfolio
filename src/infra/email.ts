const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.PASSWORD_USER,
  },
});

export const email = async (
  from: string,
  to: string,
  subject: string,
  text: string,
  html: string,
) => {
  try {
    await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html,
    });
    console.log("Email enviado com sucesso!");
  } catch (error) {
    console.error(error);
  }
};
