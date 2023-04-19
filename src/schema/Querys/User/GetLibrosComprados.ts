import { verify } from "jsonwebtoken";
import { getLibrosComprados } from "../../../TypeOrm/Querys/Usuario/getLibrosComprados";
import { SendComprados } from "../../../TypesDefs/SendComprados";

export async function GetLibrosComprados(tokenUser: string) {

    const message = new SendComprados()

    try {
        const id = parseInt(<string>verify(tokenUser, 'secret-key'))

        const book = await getLibrosComprados(id)
        if(book){
            message.message = 'Books Comprados obtenidos'
            message.success = true;
            message.book = book;

        }else {
            message.message = 'No tiene Libros comprados'
            message.success = false;
        }

        

        return message;

    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}