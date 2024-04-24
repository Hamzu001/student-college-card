import nodemailer from "nodemailer"

async function sendOtpToEmail(receiverEmail, token) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: process.env.AUTH_MAIL,
      pass: process.env.AUTH_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
    },
  })

  let mailOptions = {
    from: process.env.AUTH_MAIL,
    to: receiverEmail,
    subject: "Quiz App: Verify your email",
    html:
      `<h2 style="color:black;text-align:center;">GMGS ==> send you email for verify your email<br>Your verify link is here! Click To Verify<br> <b> <a href="${process.env.WEB_URL}/api/v1/user/verify?token=` +
      token +
      `">Verify Email</a>  </b> </h2>`,
  }

  // send otp to email

  const sendMail = new Promise((resolve) => {
    transporter.sendMail(mailOptions, async function (error, info) {
      resolve({ error, info })
    })
  })

  const { error, info } = await sendMail

  if (error) {
    console.log({ error })
  } else {
    console.log(info.response)
  }
}

export { sendOtpToEmail }
