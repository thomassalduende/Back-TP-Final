import { agregarDireccionUser } from "../../../TypeOrm/Mutations/Usuario/agregarDireccionUser";
import { SendUser } from "../../../TypesDefs/SendUser";
import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";

export async function AgregarDireccion(tokenUser:string, direccion: string, info: string, telefono: number, cod_postal: number) {

    const message = new SendUser()

    try{

        const id_user: number = parseInt(<string>verify(tokenUser, <string>JWT_SECRET))

        const user = await agregarDireccionUser(id_user, direccion, info, telefono, cod_postal)

        message.message = 'Direccion agregada'
        message.success = true;
        message.accessToken = tokenUser;
        message.user = user[0]

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}