import { getUsuarioMail } from "../../../TypeOrm/Querys/Usuario/getUsuarioMail";
import { getUsuarioID } from "../../../TypeOrm/Querys/Usuario/getUsuarioID";
import { verify } from "jsonwebtoken";
import { Send } from "../../../TypesDefs/Send";
import { updateUser } from "../../../TypeOrm/Mutations/Usuario/updateUser";


export async function UpdateUser(tokenUser: string, nombre: string, email: string, password: string) {

    const message = new Send()

    try{
        const id = parseInt(<string>verify(tokenUser, 'secret-key'))
        const user = await getUsuarioID(id)
        const emailUser = await getUsuarioMail(email)

        if(emailUser){
            if(email != user[0].email){

                console.log(email != user[0].email)

                message.message = `El email ${email} ya se encuentra en uso`;
                message.success = false;

            }

            await updateUser(nombre, email, password, user[0])

            message.message = 'Usuario modificado';
            message.success = true;
        }


        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}
