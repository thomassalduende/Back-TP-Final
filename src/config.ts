import { config } from "dotenv";
config()

export const PORT = process.env.PORT || '3000'

export const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'Thomas44';
export const DB_DATABASE= process.env.DB_DATABASE || 'TP-Final';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '5432';


export const ACCESS_TOKEN_MP = process.env.ACCESS_TOKEN_MP
export const PUBLIC_KEY = process.env.PUBLIC_KEY

export const EMAIL_BS = process.env.MAIL
export const PASS_EMAIL = process.env.PASS_EMAIL

export const JWT_SECRET = process.env.JWT_SECRET