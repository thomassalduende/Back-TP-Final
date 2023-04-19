import { existsCupon } from "../../../TypeOrm/Mutations/Cupon/existsCuponDescuento";
import { agregarCuponDesc } from "../../../TypeOrm/Mutations/Usuario/agregarCuponDesc";
import { SendCupones } from "../../../TypesDefs/SendCupones";
import { verify } from "jsonwebtoken";



export async function AgregarCupon(codigo: string, tokenUser: string) {

    const message = new SendCupones()

    try {
        const id_user: number = parseInt(<string>verify(tokenUser,  'secret-key'))

        const cupon = await agregarCuponDesc(codigo, id_user)

        const exisCupon = await existsCupon(codigo)
        if(exisCupon){
            message.message = 'Cupon agregado'
            message.success = true;
            message.cupon = cupon;
        }else {
            message.message = 'No existe el cupon'
            message.success = false;
        }
        

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
    
}