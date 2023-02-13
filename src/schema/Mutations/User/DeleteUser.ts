import { deleteUser } from "../../../TypeOrm/Mutations/Usuario/deleteUser";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";

export async function DeleteUser(tokenUser: string) {

    const message = new Send()

    try {
        const dni_user: number = parseInt(<string>verify(tokenUser,<string> JWT_SECRET))

        await deleteUser(dni_user)

        message.message = 'User eliminado'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
}