import { Books } from "../../../Entities/Books"

export async function getAllBooks() {
    const books = Books.find({
        relations: {
            isbn: true,
            editorial: true,
            genero: true
        }
    })

    return books;
}