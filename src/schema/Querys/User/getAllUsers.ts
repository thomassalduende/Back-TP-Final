// query que obtiene todos los usuarios
import { Users } from "../../../Entities/Users"
import { GraphQLList } from "graphql";
import { User } from "../../TypeDefs/User";


export const getAllUsers = {
    type: new GraphQLList(User),
    async resolve(){
        // const result = await GetAllUsers()
        const result = await Users.find()
        
        return result;
    }
}