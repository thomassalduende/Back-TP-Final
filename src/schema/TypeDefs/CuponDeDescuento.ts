import { GraphQLObjectType, GraphQLInt, GraphQLFloat } from "graphql";

export const CuponDeDescuento = new GraphQLObjectType({
    name: 'cupon',
    fields: {
        codigo: {type: GraphQLInt},
        precio: {type: GraphQLFloat},
        cantidad: {type: GraphQLInt},
        cod_postal: {type: GraphQLInt}
    }
});