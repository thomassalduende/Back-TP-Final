import { Valoracion } from "../../../Entities/Valoracion";

export async function existValoracion(isbn: string, id: number){

    const valoracion = await Valoracion.find({
        where: {
            user_book: id.toString() + isbn
        }
    })

    return  valoracion[0] ? true : false;

}