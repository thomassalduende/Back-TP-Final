import { quitarItem } from "../../../TypeOrm/Mutations/Usuario/quitarItem";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";


export async function QuitarItem(isbn: string, cantidad: number, tokenUser: string) {

    const message = new Send()

    try{
        const dni_user: number = parseInt(<string>verify(tokenUser, <string>JWT_SECRET))

        await quitarItem(isbn, cantidad, dni_user)

        message.message = 'Items removidos'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false; 

        return message;
    }
}