import { Books } from "../../Entities/Books";

export async function getBookGenero(genero: string) {

    const book = await Books.find({
        where: {
            genero:{
                nombre: genero
            }
        }
    })

    return book;
}