import { GraphQLID, GraphQLInt, GraphQLObjectType } from "graphql";

export const LineaCarrito = new GraphQLObjectType({
    name: 'lineaCarrito',
    fields: {
        id_venta: {type: GraphQLInt},
        cantidad: {type: GraphQLInt}
    }
});