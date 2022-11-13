import {GraphQLString, GraphQLID, GraphQLNonNull, GraphQLBoolean, GraphQLInt} from 'graphql';
import { Users } from '../../../Entities/Users';
import { User } from '../../TypeDefs/User';



export const CreateUser = {
    type: User,
    args: {
        dni: {type: new GraphQLNonNull(GraphQLID)},
        nombre: {type: new GraphQLNonNull(GraphQLString)},
        apellido: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        telefono: {type: new GraphQLNonNull(GraphQLInt)},
        direccion: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        es_admin: {type: new GraphQLNonNull(GraphQLBoolean)},
    },
    async resolve(_:any, args: any) {
        // const result = await InsertUser(args.dni, args.nombre, args.apellido, args.email, args.telefono, args.direccion, args.password, args.es_admin);
        const result = await Users.insert({
            dni: args.dni,
            nombre: args.nombre,
            apellido: args.apellido,
            email: args.email,
            telefono: args.telefono,
            direccion: args.direccion,
            password: args.password,
            es_admin: args.es_admin

        })
        console.log(result)
        return {...args};
    }
}