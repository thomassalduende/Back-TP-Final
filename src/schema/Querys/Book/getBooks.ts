import { SendBook } from "../../../TypesDefs/SendBook";
import { getBookAuthor } from "../../../TypeOrm/Querys/Book/getBookAuthor";
import { getBookGenero } from "../../../TypeOrm/Querys/Book/getBookGenero";
import { getBookIsbn } from "../../../TypeOrm/Querys/Book/getBookIsbn";
import { getBookNombre } from "../../../TypeOrm/Querys/Book/getBookNombre";
import { getAllBooks } from "../../../TypeOrm/Querys/Book/getAllBooks";

async function GetBookAutor(autor: string) {

    const message = new SendBook()

    try{

        const book = await getBookAuthor(autor)

        message.message = 'Books Obtenidos'
        message.success = true;
        message.book = book;

        return message

    }catch(error: any){
        message.message = error;
        message.success = false;
        
        return message;
    }
}


async function GetBookGenero(genero: string) {

    const message = new SendBook()

    try{

        const book = await getBookGenero(genero)

        message.message = 'Books Obtenidos'
        message.success = true;
        message.book = book;

        return message

    }catch(error: any){
        message.message = error;
        message.success = false;
        
        return message;
    }
}

async function GetBookISBN(isbn: string) {

    const message = new SendBook()

    try{

        const book = await getBookIsbn(isbn)

        message.message = 'Books Obtenidos'
        message.success = true;
        message.book = book;

        return message

    }catch(error: any){
        message.message = error;
        message.success = false;
        
        return message;
    }
}

async function GetBookNombre(nombre: string) {

    const message = new SendBook()

    try{

        const book = await getBookNombre(nombre)

        message.message = 'Books Obtenidos'
        message.success = true;
        message.book = book;

        return message

    }catch(error: any){
        message.message = error;
        message.success = false;
        
        return message;
    }
}

async function GetAllBooks() :Promise<SendBook>{

    const message = new SendBook()

    try{

        const book = await getAllBooks()

        message.message = 'Books Obtenidos'
        message.success = true;
        message.book = book

        return message

    }catch(error: any){
        message.message = error;
        message.success = false;
        
        return message;
    }
}

export async function getBooks(args: any) {

    if(args.autor && args.autor != ''){
        return await GetBookAutor(args.autor)

    }else if(args.genero && args.genero != ''){
        return await GetBookGenero(args.genero)

    }else if(args.isbn && args.isbn != ''){
        return await GetBookISBN(args.isbn)

    }else if(args.nombre && args.nobre != ''){
        return await GetBookNombre(args.nombre)
    }

    return GetAllBooks() 
}

