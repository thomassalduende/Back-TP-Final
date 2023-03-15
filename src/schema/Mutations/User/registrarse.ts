import { Registrarse } from "../../../TypeOrm/Mutations/Usuario/Registrarse";
import { SendUser } from "../../../TypesDefs/SendUser";
import { JWT_SECRET } from "../../../config";
import { sign } from "jsonwebtoken";


export async function registrarse(nombre: string, email: string, password: string) {

    const message = new SendUser()

    try{

        const user = await Registrarse(nombre, email, password)

        const id_user: string = user[0].id.toString()


        message.message = 'User registrado'
        message.success = true;
        message.accessToken = sign(id_user, JWT_SECRET);
        message.user = user[0];

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}