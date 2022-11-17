import { Books } from "../../../Entities/Books"
import { GraphQLList } from "graphql";
import { Book } from "../../TypeDefs/Book";


export const getAllBook = {
    type: new GraphQLList(Book),
    async resolve(){
        // const result = await GetAllUsers()
        const result = await Books.find()
        
        return result;
    }
}