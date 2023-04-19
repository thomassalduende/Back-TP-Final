import { Valoracion } from "../../../Entities/Valoracion";
import { Users } from "../../../Entities/Users";
import { Books } from "../../../Entities/Books";


export async function agregarValoracion(cantidad_estrellas: number, isbn: string, id: number) {

    const user = await Users.find({
        where: {
            id: id
        }
    })

    const book = await Books.find({
        where: {
            isbn: isbn
        }
    })

    const valoracion = new Valoracion()
    valoracion.cantidad_estrellas = cantidad_estrellas;
    valoracion.user_book = id.toString() + isbn;
    valoracion.books = book[0];
    valoracion.users = user[0];

    await valoracion.save();
}