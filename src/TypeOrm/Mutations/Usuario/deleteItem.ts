import { Users } from "../../../Entities/Users";

export async function deleteItem(dni: number, isbn: string) {

    const usuario = await Users.find({
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
    })

    if (usuario[0].carrito.items) {

        const pos = usuario[0].carrito.items.findIndex(item => item.book.isbn == isbn)

        if (pos != -1){

            await usuario[0].carrito.items[pos].remove()
        }
    }
    
}