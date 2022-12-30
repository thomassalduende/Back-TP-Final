import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } from "graphql";

export const Book = new GraphQLObjectType({
    name: 'books',
    fields: {
        isbn:{type: GraphQLInt},
        nombre: {type: GraphQLString},
        precio: {type: GraphQLInt},
        stock: {type: GraphQLInt},
        stock_min: {type: GraphQLInt},
        id_valoracion: {type: GraphQLInt},
        id_genero: {type: GraphQLString},
        id_oferta: {type: GraphQLFloat},
        dni_autor: {type: GraphQLInt},
        id_editorial: {type: GraphQLInt},
        id_linea_carrito: {type: GraphQLInt}
    }
});
