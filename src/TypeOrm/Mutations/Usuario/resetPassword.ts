import { Users } from "../../../Entities/Users";
import { message } from "../../../ControlerMail/message";
import { sendMail } from "../../../ControlerMail/sendMail";
import { RecoveryPassword } from "../../../ControlerMail/html-noti/notificacionEmail";




async function sendMailNewPassword(email: string, code: string) {

    let mensaje = message(email, "", "", "")

    mensaje.subject = 'Código de restablecimiento de contraseña'
    mensaje.text = `Tu contraseña es: ${code}. Para modificarla ve a tu perfil y modificala`
    mensaje.html = RecoveryPassword(code);

    await sendMail(mensaje)
}


export async function resetPassword(email: string) {


    const user = await Users.find({
        where: {
            email: email
        }
    })

    if (!user) {
        throw new Error('No existe una cuenta asociada a ese correo electrónico.');
    }

    const crypto = require('crypto');
    const code = crypto.randomInt(1, 100000).toString()
    console.log(code)
    
    user[0].resetPassword = code;

    await user[0].save();

    await sendMailNewPassword(email, code)
    
}