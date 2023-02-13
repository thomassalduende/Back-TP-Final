import { realizarCompra } from "../../../TypeOrm/Mutations/Usuario/realizarCompra";
import { SendMercadoPago } from "../../../TypesDefs/SendMercadoPago";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";


export async function RealizarCompra(tokenUser: string) {

    const message = new SendMercadoPago()

    try{

        const dni_user = parseInt(<string>verify(tokenUser, <string>JWT_SECRET))

        const res = await realizarCompra(dni_user)

        message.message = 'compra realizada'
        message.success = true;
        message.init_p = res;

        return message;
    }catch(error){
        message.message = 'compra rechazada'
        message.success = false;
        message.init_p = ''
        console.log(error)

        return message;
    }
}