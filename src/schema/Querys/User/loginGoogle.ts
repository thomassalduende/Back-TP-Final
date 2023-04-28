import { IniciarSesionRedSocial } from "../../../TypeOrm/Mutations/Usuario/IniciarSesionRedSocial";
import { SendUser } from "../../../TypesDefs/SendUser";
import { sign } from "jsonwebtoken"


export async function loginGoogle(nombre: string, email: string, password: string) {

    const message = new SendUser()

    try{
        const user = await IniciarSesionRedSocial(nombre, email, password)

        const id: string = user[0].id.toString()

        message.message = 'User logueado'
        message.success = true;
        message.accessToken = sign(id, 'secret-key')
        message.user = user[0];

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}