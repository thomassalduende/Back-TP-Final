import { ILike } from "typeorm";
import { Books } from "../../../Entities/Books";

export async function getBookAuthor(autor: string) {

    const book = await Books.find({
        relations: {
            editorial: true,
            genero: true,
            autor: true,
            opiniones: {
                users: true
            },
            valoracion: {
                users: true
            }
        },
        where: {
            autor: {
                nombre: ILike(`%${autor}%`)
            }
        }
    })
    
    return book;
}