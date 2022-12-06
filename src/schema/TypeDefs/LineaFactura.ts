import { GraphQLFloat, GraphQLInt, GraphQLObjectType } from "graphql";

export const LineaFactura = new GraphQLObjectType({
    name: 'lineaFactura',
    fields: {
        isbn: {type: GraphQLInt},
        cantidad: {type: GraphQLInt},
        precio_unitario: {type: GraphQLFloat}
    }
});