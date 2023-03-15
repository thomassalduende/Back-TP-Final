import { deleteUser } from "../../../TypeOrm/Mutations/Usuario/deleteUser";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";

export async function DeleteUser(tokenUser: string) {

    const message = new Send()

    try {
        const id: number = parseInt(<string>verify(tokenUser,JWT_SECRET))

        await deleteUser(id)

        message.message = 'User eliminado'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
}