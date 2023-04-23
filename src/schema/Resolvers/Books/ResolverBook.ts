import { Query, Resolver, Mutation, Args, Arg, Field } from "type-graphql";
import { InsertBook } from "../../Mutations/Book/insertBook";
import { UpdateBook } from "../../Mutations/Book/updateBook";
import { DeleteBook } from "../../Mutations/Book/deleteBook";
import { GetBooks } from "../../Querys/Book/getBooks";
import { SendBook } from "../../../TypesDefs/SendBook";
import { ArgsComprado, ArgsGetBook, ArgsInsertBook, ArgsUpdateBook } from "../../ArgsDefs/argsDefsBook";
import { Send } from "../../../TypesDefs/Send";
import { LibroComprado } from "../../Querys/User/LibroComprado";
import { BusquedaBooks } from "../../Querys/Book/BusquedaLibros";




@Resolver()
export class ResolverBook {

    @Mutation(() => SendBook)
    async insertBook(@Args() {isbn, imagen, nombre, precio, stock, descripcion, fecha_ingreso, editorial, descuento, genero, autor}: ArgsInsertBook){

        return await InsertBook(isbn, imagen, nombre, precio, stock, descripcion, fecha_ingreso, editorial, descuento, genero, autor)
    }

    @Mutation(() => SendBook)
    async updateBook(@Args() {isbn_orig, isbn, imagen, nombre, precio, stock, descripcion, fecha_ingreso, editorial, descuento, genero, autor}: ArgsUpdateBook){

        return await UpdateBook(isbn_orig, isbn, imagen, nombre, precio, stock, descripcion, fecha_ingreso, editorial, descuento, genero, autor)
    }

    @Mutation(() => Send)
    async deleteBook(@Arg('isbn') isbn: string){

        return await DeleteBook(isbn)
    }

    @Query(() => SendBook)
    async getBook(@Args() args: ArgsGetBook){
        
        return await GetBooks(args)
    }

    @Query(() => Send)
    async libroComprado(@Args() {isbn, tokenUser} : ArgsComprado){

        return await LibroComprado(tokenUser, isbn)
    }

    @Query(() => SendBook)
    async busquedaLibros(@Args() args: ArgsGetBook){

        return await BusquedaBooks(args)
    }
}