import { deleteUser } from "../../../TypeOrm/Mutations/Usuario/deleteUser";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";

export async function DeleteUser(email: string) {

    const message = new Send()

    try {
        await deleteUser(email)

        message.message = 'User eliminado'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
}