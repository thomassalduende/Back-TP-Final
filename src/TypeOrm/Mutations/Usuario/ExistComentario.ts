import { Books } from "../../../Entities/Books";
import { Opiniones } from "../../../Entities/Opinion_user";


export async function ExistComentario(isbn: string, id: number) {

    

    const comentario = await Opiniones.find({
        where: {
            user_book: id.toString() + isbn
        }
    })

    return comentario[0] ? true : false;
}