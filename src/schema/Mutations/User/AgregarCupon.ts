import { agregarCuponDesc } from "../../../TypeOrm/Mutations/Usuario/agregarCuponDesc";
import { SendCupones } from "../../../TypesDefs/SendCupones";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";


export async function AgregarCupon(codigo: string, tokenUser: string) {

    const message = new SendCupones()

    try {
        const dni_user: number = parseInt(<string>verify(tokenUser, <string>JWT_SECRET))

        const cupon = await agregarCuponDesc(codigo, dni_user)

        message.message = 'Cupon agregado'
        message.success = false;
        message.cupon = cupon;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
    
}