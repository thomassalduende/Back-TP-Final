import { Registrarse } from "../../../TypeOrm/Mutations/Usuario/Registrarse";
import { SendUser } from "../../../TypesDefs/SendUser";
import { JWT_SECRET } from "../../../config";
import { sign } from "jsonwebtoken";


export async function registrarse(nombre: string, apellido: string, dni: number, email: string, password: string) {

    const message = new SendUser()

    try{

        const user = await Registrarse(nombre, apellido, dni, email, password)

        const dni_user: string = user[0].dni.toString()


        message.message = 'User registrado'
        message.success = true;
        message.accessToken = sign(dni_user, <string>JWT_SECRET);
        message.user = user[0];

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}