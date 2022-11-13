import {GraphQLString, GraphQLNonNull, GraphQLID} from 'graphql';
import { Books } from '../../../Entities/Books';


export const DeleteBook = {
    type: GraphQLString,
    args: {
        isbn: {type: new GraphQLNonNull(GraphQLID)},
    },
    async resolve(_:any, args: any) {
        // const result = await deleteUser(args.dni);
        const result = await Books.delete(args.isbn);
        if (result.affected === 1) 
        return `LIBRO CON ISBN: ${args.isbn}, ELIMINADO`;

        console.log(result)
        return `LIBRO CON ISBN: ${args.isbn}, NO ENCONTRADO`;
    }
}