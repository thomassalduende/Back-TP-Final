import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const Genero = new GraphQLObjectType({
    name: 'genero',
    fields: {
        id_genero: {type: GraphQLID},
        nombre: {type: GraphQLString}
    }
});