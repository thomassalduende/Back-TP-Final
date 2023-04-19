import { verify } from "jsonwebtoken";
import { Send } from "../../../TypesDefs/Send";
import { deleteValoracion } from "../../../TypeOrm/Mutations/Usuario/deleteValoracion";


export async function DeleteValoracion(isbn: string, tokenUser: string) {

    const message = new Send()

    try{
        const id = parseInt(<string>verify(tokenUser,  'secret-key'))

        await deleteValoracion(id, isbn)

        message.message = "Valoracion eliminada";
        message.success = true;

        return message;

    }catch(error: any) {
        message.message = error;
        message.success = false;

        return message;
    }
}