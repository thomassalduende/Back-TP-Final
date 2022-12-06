import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } from "graphql";

export const Factura = new GraphQLObjectType({
    name: 'factura',
    fields: {
        id_cliente: {type: GraphQLInt},
        fecha: {type: GraphQLString},
        monto: {type: GraphQLFloat},
        modo_pago: {type: GraphQLString}
    }
});