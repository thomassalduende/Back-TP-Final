import { SendBook } from "../../../TypesDefs/SendBook";
import { getBookAuthor } from "../../../TypeOrm/Querys/Book/getBookAuthor";
import { getBookGenero } from "../../../TypeOrm/Querys/Book/getBookGenero";
import { getBookIsbn } from "../../../TypeOrm/Querys/Book/getBookIsbn";
import { getBookNombre } from "../../../TypeOrm/Querys/Book/getBookNombre";
import { getAllBooks } from "../../../TypeOrm/Querys/Book/getAllBooks";



async function FuncionGetLibros(args: any) {
    console.log(args)
    console.log(args.nombre)

    if(args){
        const autor = await getBookAuthor(args.autor)

        if(autor.length == 0){
            const genero = await getBookGenero(args.genero)

            if(genero.length == 0){
                const isbn = await getBookIsbn(args.isbn)

                if(isbn.length == 0){
                    console.log(isbn.length)
                    // return await getAllBooks()
                    const nombre = await getBookNombre(args.nombre)
                    console.log(nombre)
                    if(nombre.length == 0){
                        return await getAllBooks()
                    }else{
                        return await getBookNombre(args.nombre)
                    }
                }else{
                    return await getBookIsbn(args.isbn)
                }
            }else {
                return await getBookGenero(args.genero)
            }
        }else{
            return await getBookAuthor(args.autor)
        }
    }else{
        return await getAllBooks()
    }
}

export async function GetBooks(args: any){

    const message = new SendBook()

    try{

        const book = await FuncionGetLibros(args)

        message.message = 'Books Obtenidos'
        message.success = true;
        message.book = book;

        return message;

    }catch(error: any){
        message.message = error;
        message.success = false;
        
        return message;
    }
}

