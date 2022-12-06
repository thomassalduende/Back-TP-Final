import { GraphQLInt, GraphQLObjectType } from "graphql";

export const Valoracion = new GraphQLObjectType({
    name: 'valoracion',
    fields: {
        isbn: {type: GraphQLInt},
        cant_estrellas: {type: GraphQLInt}
    }
});