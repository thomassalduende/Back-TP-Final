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

    const valor = await Valoracion.find({
        where: {
            user_book: id.toString() + isbn
        }
    })


    if(valor.length == 0){
        const valoracion = new Valoracion()
        valoracion.cantidad_estrellas = cantidad_estrellas;
        valoracion.user_book = id.toString() + isbn;
        valoracion.books = book[0];
        valoracion.users = user[0];

        await valoracion.save();
    }else {
        valor[0].cantidad_estrellas = cantidad_estrellas;
        valor[0].user_book = id.toString() + isbn;
        valor[0].books = book[0];
        valor[0].users = user[0];

        await valor[0].save()
    }
}