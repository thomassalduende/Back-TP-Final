import { Books } from "../../../Entities/Books"
import { GraphQLID, GraphQLNonNull } from "graphql";
import { Book } from "../../TypeDefs/Book";

export const getUserID = {
    type: Book,
    args:{
        nombre: {type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve(_: any, args: any){
        // const result = await GetUserID(args.dni)
        const result = await Books.findOneBy({nombre: args.nombre});

        return result;
    }
}