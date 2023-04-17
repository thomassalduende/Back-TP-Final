import { libroComprado } from "../../../TypeOrm/Querys/Usuario/libroComprado";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";

export async function LibroComprado(tokenUser: string, isbn: string) {

    const message = new Send()

    try {

        const id = parseInt(<string>verify(tokenUser, 'secret-key'));

        const comprado = await libroComprado(isbn, id)

        if(comprado){
            message.message = "Libro comprado"
            message.success = true;
        }else {

            message.message = "No comprado"
            message.success = false;
        }

        return message;
    }catch(error: any){
        message.message = error;
        message.success = false;

        return message;
    }
}