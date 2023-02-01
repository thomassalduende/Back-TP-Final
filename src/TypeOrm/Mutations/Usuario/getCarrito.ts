import { Users } from "../../../Entities/Users";

export async function getCarrito(dni: number) {

    const usuario = await Users.find({
        relations: {
            carrito: {
                cupon: true,
                items: {
                    book: true
                }
            },
            direccion: true
        },
        where: {
            dni: dni
        }

    })

    return usuario
    
}