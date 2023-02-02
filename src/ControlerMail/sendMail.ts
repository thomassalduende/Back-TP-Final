import { EMAIL_BS, PASS_EMAIL } from "../config"

const nodemailer = require("nodemailer")

const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user:EMAIL_BS,
        pass: PASS_EMAIL
    }
}

export const sendMail = async (message: any) => {

    const transporter = nodemailer.createTransport(config)

    await transporter.sendMail(message)
}