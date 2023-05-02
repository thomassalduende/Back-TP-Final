import { Users } from "../../../Entities/Users";
import { LineaCarrito } from "../../../Entities/LineaCarrito";


export async function calcularDescuento (id: number){

    const user = await Users.find({
        relations: {
            carrito: {
                cupon: true
            }
        },
        where: {
            id: id,
            carrito: {
                cupon: true
            }
        }
    })

    const libros = await LineaCarrito.find({
        relations: {
            carrito: true,
            book: true
        },
        where: {
            carrito: user[0].id
        }
    })

    const descuento = user[0].carrito.cupon.cantidad_descuento
    const cantidad_libros = libros[0].cantidad
    const precio = libros[0].book.precio
    const precio_total = (precio  - (+precio * descuento/100)) * cantidad_libros

    return precio_total

}