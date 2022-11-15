import {GraphQLString, GraphQLID, GraphQLNonNull, GraphQLFloat, GraphQLInt} from 'graphql';
import { Books } from '../../../Entities/Books';
import { MessageType } from '../../TypeDefs/Message';



export const UpdateBook = {
    type: MessageType,
    args: {
        isbn: {type: new GraphQLNonNull(GraphQLID)},
        nombre: {type: new GraphQLNonNull(GraphQLString)},
        precio: {type: new GraphQLNonNull(GraphQLInt)},
        stock: {type: new GraphQLNonNull(GraphQLInt)},
        stock_min: {type: new GraphQLNonNull(GraphQLInt)},
        id_valoracion: {type: new GraphQLNonNull (GraphQLInt)},
        id_genero: {type: new GraphQLNonNull (GraphQLString)},
        id_oferta: {type: new GraphQLNonNull (GraphQLFloat)},
        dni_autor: {type: new GraphQLNonNull (GraphQLInt)},
        id_editorial: {type: new GraphQLNonNull (GraphQLInt)},
        id_linea_carrito: {type: new GraphQLNonNull (GraphQLInt)}
    },
    async resolve(_:any, args: any) {

        const bookFound = await Books.findOneBy({isbn: args.isbn})

        if (!bookFound) return {
            success: false,
            message: "Book not found"
        }

        const response = await Books.update({isbn: args.isbn}, 
            {nombre: args.nombre, 
            precio: args.precio, 
            stock: args.stock, 
            stock_min: args.stock_min, 
            id_valoracion : args.id_valoracion, 
            id_genero: args.id_genero, 
            id_oferta: args.id_oferta, 
            dni_autor: args.dni_autor, 
            id_editorial: args.id_editorial, 
            id_linea_carrito: args.id_linea_carrito})

        if(response.affected === 0) return{message: "Book not found"}; 
        
        return {
            success: true, 
            message: "Update Book successfully"
        }
        
    }
}