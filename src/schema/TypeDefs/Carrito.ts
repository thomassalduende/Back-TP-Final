import { GraphQLObjectType, GraphQLInt, GraphQLID } from "graphql";

export const Carrito = new GraphQLObjectType({
    name: 'carrito',
    fields: {
        id_carrito: {type: GraphQLID},
        id_usuario: {type: GraphQLInt}
    }
})