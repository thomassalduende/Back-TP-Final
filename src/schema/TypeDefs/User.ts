import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLInt} from 'graphql';

export const User = new GraphQLObjectType({
    name: 'usuario',
    fields: {
        dni: {type: GraphQLID},
        nombre: {type: GraphQLString},
        apellido: {type: GraphQLString},
        email: {type: GraphQLString},
        telefono: {type: GraphQLInt},
        direccion: {type: GraphQLString},
        password: {type: GraphQLString},
        es_admin: {type: GraphQLBoolean}
    }
});
