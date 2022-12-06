import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export const Autor =  new GraphQLObjectType({
    name: 'autor',
    fields: {
        id_autor: {type: GraphQLInt},
        nombre: {type: GraphQLString},
        apellido: {type: GraphQLString}
    }
});