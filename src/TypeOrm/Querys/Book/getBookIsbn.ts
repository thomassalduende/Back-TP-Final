import { Books } from "../../../Entities/Books";

export async function getBookIsbn(isbn: string) {

    const book = await Books.find({
        relations: {
            editorial: true,
            genero: true,
            autor: true,
            factura_detalle: true,
            opiniones: {
                users: true
            },
            valoracion: {
                users: true
            }
        },
        where: {
            isbn: isbn
        }
    })

    return book;
}