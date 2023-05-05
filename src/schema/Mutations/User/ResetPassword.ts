import { Send } from "../../../TypesDefs/Send";
import { resetPassword } from "../../../TypeOrm/Mutations/Usuario/resetPassword";
import { existEmail } from "../../../TypeOrm/Mutations/Usuario/existEmail";


export async function ResetPassword(email: string) {

    const message = new Send()

    try{
        const existMail = await existEmail(email)  
        if(existMail){
            await resetPassword(email)

            message.message = 'Contraseña nueva generada'
            message.success = true;

        }else{
            message.message = 'Email no registrado'
            message.success = false;
        }
        
        return message;

    }catch(error: any) {
        message.message = error;
        message.success = false;
    }
    
}

