import { getUsuarioMail } from "../../../TypeOrm/Querys/Usuario/getUsuarioMail";
import { getUsuarioID } from "../../../TypeOrm/Querys/Usuario/getUsuarioID";
import { verify } from "jsonwebtoken";
import { Send } from "../../../TypesDefs/Send";
import { updateUser } from "../../../TypeOrm/Mutations/Usuario/updateUser";


export async function UpdateUser(tokenUser: string, password: string) {

    const message = new Send()

    try{
        const id = parseInt(<string>verify(tokenUser, 'secret-key'))
        const user = await getUsuarioID(id)

            await updateUser(id, password)

            message.message = 'Usuario modificado';
            message.success = true;


        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}
