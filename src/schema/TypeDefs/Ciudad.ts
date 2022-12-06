import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export const Ciudad = new GraphQLObjectType({
    name: 'ciudad',
    fields: {
        cod_postal: {type: GraphQLInt},
        nombre: {type: GraphQLString}
    }
});