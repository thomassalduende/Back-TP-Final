import { GraphQLFloat, GraphQLInt, GraphQLObjectType } from "graphql";

export const Oferta = new GraphQLObjectType({
    name: 'oferta',
    fields: {
        fecha: {type: GraphQLInt},
        descuento: {type: GraphQLFloat}
    }
});