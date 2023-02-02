import e from "express";
import { EMAIL_BS } from "../config";

export const message = (email: any, subject: string, message: string, message_html: string) =>{

    return {
        from: EMAIL_BS,
        to: email,
        subject: subject,
        text: message,
        html: message_html
    }
}