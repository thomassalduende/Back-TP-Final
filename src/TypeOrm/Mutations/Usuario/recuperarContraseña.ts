import { Users } from "../../../Entities/Users";
import { message } from "../../../ControlerMail/message";
import { sendMail } from "../../../ControlerMail/sendMail";
import { RecoveryPassword } from "../../../ControlerMail/html-noti/notificacionEmail";
import { sign, verify } from "jsonwebtoken";
const crypto = require("crypto")
export async function recuperarContraseña(id: number) {


    const user = await Users.find({
        relations: {
            carrito: true
        },
        where: {
            id: id
        }
    }) 

   
    const token = crypto.randomBytes(20).toString('hex');
    console.log(token)

    const signToken = sign({token}, 'secret-key', { expiresIn: '1h' });

    const decodedToken = verify(signToken, 'secret-key');
    const tokenFromToken = decodedToken;

    let mensaje = message(user[0].email, "", "", "")
    let subject: string;
    let messageText: string;
    
    
}