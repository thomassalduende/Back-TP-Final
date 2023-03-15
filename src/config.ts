import { config } from "dotenv";
config()

module.exports = {
    db: {
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'Thomas44',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_DATABASE || 'TP-Final',
    }
}

export const PORT = process.env.PORT || 3000

export const ACCESS_TOKEN_MP = process.env.ACCESS_TOKEN_MP
export const PUBLIC_KEY = process.env.PUBLIC_KEY

export const EMAIL_BS = process.env.MAIL
export const PASS_EMAIL = process.env.PASS_EMAIL

export const JWT_SECRET = process.env.JWT_SECRET || 'HS256'