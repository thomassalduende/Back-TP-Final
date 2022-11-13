import {GraphQLString, GraphQLID, GraphQLNonNull, GraphQLInt, GraphQLBoolean, GraphQLInputObjectType} from 'graphql';
import { Users } from '../../../Entities/Users';
import { comparePassword } from '../../../libs/bcrypt';
import {MessageType} from '../../TypeDefs/Message'


export const UpdateUser = {
    type: MessageType,
    args: {
        dni: {type: new GraphQLNonNull(GraphQLID)},
        input: new GraphQLInputObjectType({
            name: 'UserInput',
            fields: () =>({
                nombre: {type: new GraphQLNonNull(GraphQLString)},
                apellido: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                telefono: {type: new GraphQLNonNull(GraphQLInt)},
                direccion: {type: new GraphQLNonNull(GraphQLString)},
                old_password: {type: new GraphQLNonNull(GraphQLString)},
                new_password:{type: new GraphQLNonNull(GraphQLString)},
                es_admin: {type: new GraphQLNonNull(GraphQLBoolean)},
            }),
        }),
    },
    async resolve(_:any, {dni, input}: any) {
        // const result = await updateUser(args.dni, args.nombre, args.apellido, args.email, args.telefono, args.direccion, args.password, args.es_admin);
        const userFound = await Users.findOneBy({dni});
        if (!userFound) throw new Error('User not found');

        // Compara la contraseña vieja con la nueva
        const isMatch = await comparePassword(
            userFound?.password as string,
            input.old_password
        );
        if (!isMatch) throw new Error('Passwords does not match')

        // Actualiza la contraseña
        const new_password = input.new_password;
        delete input.old_password;
        delete input.new_password;

        input.password = new_password;

        const response = await Users.update({dni}, input);

        if (response.affected === 0) return {message: "User not found"};

        return {
            success: true,
            message: "Update User successfully",
        };
        
    },
};