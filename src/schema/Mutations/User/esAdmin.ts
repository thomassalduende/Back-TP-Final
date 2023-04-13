import { EsAdmin } from "../../../TypeOrm/Mutations/Usuario/EsAdmin";
import { SendUser } from "../../../TypesDefs/SendUser";
import { verify } from "jsonwebtoken";


export async function esAdmin(tokenUser: string) {

    const message = new SendUser()

    try {

        const id: number = parseInt(<string>verify(tokenUser,  'secret-key'))

        const usuarioAdmin = await EsAdmin(id)

        if(usuarioAdmin){
            message.message = 'User es admin'
            message.success = true;
            message.accessToken = tokenUser;

        } else {
            message.message = 'Este user no es admin'
            message.success = false;
            message.accessToken = tokenUser;
        }

        return message;

    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}