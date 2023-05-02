import { calcularDescuento } from "../../../TypeOrm/Mutations/Cupon/calcularDescuentoCupon";
import { existsCupon } from "../../../TypeOrm/Mutations/Cupon/existsCuponDescuento";
import { agregarCuponDesc } from "../../../TypeOrm/Mutations/Usuario/agregarCuponDesc";
import { SendCupones } from "../../../TypesDefs/SendCupones";
import { verify } from "jsonwebtoken";



export async function AgregarCupon(codigo: string, tokenUser: string) {

    const message = new SendCupones()

    try {
        const id: number = parseInt(<string>verify(tokenUser,  'secret-key'))

        const cupon = await agregarCuponDesc(codigo, id)

        const exisCupon = await existsCupon(codigo)
        console.log(exisCupon)
        if(exisCupon){
            const precio = await calcularDescuento(id)
            message.message = 'Cupon agregado'
            message.success = true;
            message.cupon = cupon;
            message.precio_con_descuento = precio
        } else {
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