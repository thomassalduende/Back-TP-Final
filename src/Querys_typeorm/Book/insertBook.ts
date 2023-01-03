import { Books } from "../../Entities/Books";
import { insertAutor } from "../Autor/insertAutor";
import { insertEditorial } from "../Editorial/insertEditorial";
import { insertGenero } from "../Genero/insertGenero";

import { formatoFecha } from "../Utilities/formatoFecha";



export async function insertBook(isbn: number, 
                                    imagen: string,
                                    nombre: string,
                                    precio: number,
                                    stock: number,
                                    descripcion: string,
                                    fecha_ingreso: string,
                                    editorial: string,
                                    descuento: number = 0,
                                    genero: string,
                                    autor: string) 
{
    const book = new Books();

    book.isbn = isbn;
    book.url_imagen = imagen;
    book.nombre = nombre;
    book.precio = precio;
    book.stock = stock;
    book.descripcion = descripcion;
    book.descuento = descuento;

    if (fecha_ingreso != 'null'){
        book.fecha_ingreso = fecha_ingreso
    } else {
        book.fecha_ingreso = formatoFecha(new Date())
    }

    if (descuento > 0) {
        book.descuento = descuento;
    }

    book.genero = await insertGenero(genero)
    book.editorial = await insertEditorial(editorial)
    book.autor = await insertAutor(autor)

    await book.save();

    return book;
    
}