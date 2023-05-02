import { Books } from "../../../Entities/Books";
import { LineaCarrito } from "../../../Entities/LineaCarrito";
import { Users } from "../../../Entities/Users";

export async function AgregarItem( isbn: string, cantidad: number, id: number) {

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
            id: id
        }
    });

    // let cantidadItem = 0;

    console.log(user[0].carrito.items)

    if (user[0].carrito.items) {

        const pos = user[0].carrito.items.findIndex(item => item.book.isbn == isbn)

        if (pos == -1){

            if (cantidad > book[0].stock){

                throw new Error (`ERROR, STOCK NO DISPONIBLE`)
            }

            const item = new LineaCarrito()
            item.cantidad = cantidad;
            item.book = book[0];
            item.carrito = user[0].carrito;

            await item.save()

        }else{

            // cantidadItem = user[0].carrito.items[pos].cantidad + (+ cantidad)
        

            if(cantidad > book[0].stock){

                throw  new Error('ERROR, LA CANTIDAD A AGREGAR ES MAYOR QUE EL STOCK DISPONIBLE')
            }

            user[0].carrito.items[pos].cantidad = cantidad;

            await user[0].carrito.items[pos].save()
        }
    }
}