import { Users } from "../../Entities/Users"
import { GraphQLID, GraphQLNonNull } from "graphql";
import { User } from "../TypeDefs/User";

export const getUserID = {
    type: User,
    args:{
        dni: {type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve(_: any, args: any){
        // const result = await GetUserID(args.dni)
        const result = await Users.findOneBy(args.dni);

        return result;
    }
}