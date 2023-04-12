import { SendUser } from "../../../TypesDefs/SendUser";
import { sign } from "jsonwebtoken";
import { UserAdmin } from "../../../TypeOrm/Mutations/Usuario/UserAdmin";


export async function userAdmin(nombre: string, email: string, password: string) {

    const message = new SendUser()

    try{

        const user = await UserAdmin(nombre, email, password)

        const id: string = user.id.toString()


        message.message = 'User Admin registrado'
        message.success = true;
        message.accessToken = sign(id, 'secret-key');
        message.user = user;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}