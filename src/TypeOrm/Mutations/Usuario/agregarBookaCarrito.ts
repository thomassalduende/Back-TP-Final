import { Books } from "../../../Entities/Books";
import { LineaCarrito } from "../../../Entities/LineaCarrito";
import { Users } from "../../../Entities/Users";
import { CuponDeDescuento } from "../../../Entities/CuponDeDescuento";

export async function agregarBookaCarrito( isbn: string, cantidad: number, dni: number) {

    const book = await Books.find({
        where: {
            isbn: isbn
        }
    });

    let user = await Users.find({
        relations: {
            carrito: {
                items: {
                    book: true
                }
            }
        },
        where: {
            dni: dni
        }
    });

    

    let cantidadItem = 0;

    if (user[0].carrito.items) {

        const pos = user[0].carrito.items.findIndex(item => item.book.isbn == isbn)

        if (pos == -1){

            if (+cantidad > +book[0].stock){

                throw 'ERROR, STOCK NO DISPONIBLE'
            }

            const item = new LineaCarrito()
            item.cantidad = cantidad;
            item.book = book[0];
            item.carrito = user[0].carrito;

            await item.save()

        }else{

            cantidadItem = user[0].carrito.items[pos].cantidad + (+ cantidad)

            if(cantidadItem > book[0].stock){

                throw 'ERROR, LA CANTIDAD A GREGAR ES MAYOR QUE EL STOCK DISPONIBLE'
            }

            user[0].carrito.items[pos].cantidad = cantidadItem

            await user[0].carrito.items[pos].save()
        }
    }
}