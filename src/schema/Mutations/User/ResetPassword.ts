import { Send } from "../../../TypesDefs/Send";
import { resetPassword } from "../../../TypeOrm/Mutations/Usuario/resetPassword";


export async function ResetPassword(email: string) {

    const message = new Send()

    try{
        await resetPassword(email)

        message.message = 'Contraseña nueva generada'
        message.success = true;

        return message;

    }catch(error: any) {
        message.message = error;
        message.success = false;
    }
    
}

