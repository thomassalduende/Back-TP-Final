import { Books } from "../../Entities/Books";
import { getBookIsbn } from "./getBookIsbn";


export async function deleteBook(isbn: string) {

    const book = await getBookIsbn(isbn)
    
    await book[0].remove()
    
}