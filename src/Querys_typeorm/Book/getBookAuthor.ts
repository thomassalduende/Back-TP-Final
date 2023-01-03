import { ILike } from "typeorm";
import { Books } from "../../Entities/Books";

export async function getBookAuthor(autor: string) {

    const book = await Books.find({

        where: {
            autor: {
                nombre: ILike(`%${autor}%`)
            }
        }
    })
    
    return book;
}