import { Users } from "../../../Entities/Users";

export async function deleteItem(id: number, isbn: string) {

    const usuario = await Users.find({
        relations: {
            carrito: {
                items: {
                    book: true,
                    carrito: true
                }
            }
        },
        where: {
            id: id
        }
    })

    
    if (usuario[0].carrito.items) {
        const position = usuario[0].carrito.items.findIndex(item => item.book.isbn == isbn)
        if (position != -1){

            await usuario[0].carrito.items[position].remove()
        }
    }
}