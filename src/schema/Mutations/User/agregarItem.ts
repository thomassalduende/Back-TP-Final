import { agregarBookaCarrito } from "../../../TypeOrm/Mutations/Usuario/agregarBookaCarrito";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";


export async function agregarItem(isbn: string, cantidad: number, tokenUser: string): Promise<Send> {

    const message = new Send()

    try{
        const dni_user: number = parseInt(<string>verify(tokenUser, <string>JWT_SECRET))

        await agregarBookaCarrito(isbn, cantidad, dni_user)

        message.message = 'Se agrego item correctamente'
        message.success = true;

        return message;

    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}