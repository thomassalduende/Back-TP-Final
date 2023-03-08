import { deleteItem } from "../../../TypeOrm/Mutations/Usuario/deleteItem";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";


export async function DeleteItem(isbn: string, tokenUser: string): Promise<Send> {

    const message = new Send()

    try{
        const id_user: number = parseInt(<string> verify(tokenUser, <string>JWT_SECRET))
        
        await deleteItem(id_user, isbn)

        message.message = 'Item eliminado'
        message.success = true;

        return message;

    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
}