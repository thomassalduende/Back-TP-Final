import { Books } from "../../../Entities/Books";
import { ILike } from "typeorm";

export async function getBookGenero(genero: string) {

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
            genero:{
                nombre: ILike(`${genero}%`)
            }
        }
    })

    return book;
}