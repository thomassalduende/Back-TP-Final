import { ILike } from "typeorm";
import { Books } from "../../Entities/Books";

export async function getBookNombre(nombre: string) {

    const book = await Books.find({

        where: {
            nombre: ILike(`%${nombre}%`)
        }
    })

    return book;
    
}