import {GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLBoolean, GraphQLInputObjectType} from 'graphql';
import { Users } from '../../../Entities/Users';
import { comparePassword } from '../../../libs/compare';
import {MessageType} from '../../TypeDefs/Message'


export const UpdateUser = {
    type: MessageType,
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
        // const result = await updateUser(args.dni, args.nombre, args.apellido, args.email, args.telefono, args.direccion, args.password, args.es_admin);
        const userFound = await Users.findOneBy(args.dni);
        if (!userFound)
            return {
                success:false,
                message: "User not found"
            }

        // Compara la contraseña vieja con la nueva
        const isMatch = await comparePassword(args.password, userFound.password)

        if(!isMatch) return{
                success: false,
                message: "Password is incorrect"
        }
        
     

        const response = await Users.update((args.dni), (args.nombre, args.apellido, args.email, args.telefono, args.direccion, args.password, args.es_admin));

        if (response.affected === 0) return {message: "User not found"};

        return {
            success: true,
            message: "Update User successfully",
        };
        
    },
};