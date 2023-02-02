import { config } from "dotenv";
config()

export const PORT = process.env.PORT || 3000

export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_DATABASE= process.env.DB_DATABASE
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT


export const ACCESS_TOKEN_MP = process.env.ACCESS_TOKEN_MP
export const PUBLIC_KEY = process.env.PUBLIC_KEY

export const EMAIL_BS = process.env.MAIL
export const PASS_EMAIL = process.env.PASS_EMAIL