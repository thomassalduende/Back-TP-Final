import {GraphQLString, GraphQLNonNull, GraphQLID} from 'graphql';
import { Users } from '../../../Entities/Users';


export const DeleteUser = {
    type: GraphQLString,
    args: {
        dni: {type: new GraphQLNonNull(GraphQLID)},
    },
    async resolve(_:any, args: any) {
        // const result = await deleteUser(args.dni);
        const result = await Users.delete(args.dni);
        if (result.affected === 1) 
        return `USUARIO CON DNI: ${args.dni}, ELIMINADO`;

        console.log(result)
        return `USUARIO CON DNI: ${args.dni}, NO ENCONTRADO`;
    }
}