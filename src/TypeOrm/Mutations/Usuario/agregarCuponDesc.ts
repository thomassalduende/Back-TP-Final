import { CuponDeDescuento } from "../../../Entities/CuponDeDescuento";
import { Users } from "../../../Entities/Users";

export async function agregarCuponDesc(codigo: string, id: number) {

    const usuario = await Users.find({
        relations: {
            carrito: true
        },
        where: {
            id: id
        }
    })

    const cuponDesc = await CuponDeDescuento.find({
        where: {
            codigo: codigo
        }
    })

    if(cuponDesc[0]){

        usuario[0].carrito.cupon = cuponDesc[0]

        await usuario[0].carrito.save()
    }

    return cuponDesc;
    
}