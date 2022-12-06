import { GraphQLObjectType, GraphQLInt, GraphQLID, GraphQLString } from "graphql";

export const Envio = new GraphQLObjectType({
    name: 'envio',
    fields: {
        id_envio: {type: GraphQLID},
        direccion: {type: GraphQLString},
        nro_pedido: {type: GraphQLInt},
        cod_postal: {type: GraphQLInt}
    }
});