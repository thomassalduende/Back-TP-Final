import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const Editorial = new GraphQLObjectType({
    name: 'editorial',
    fields: {
        id_editorial: {type: GraphQLID},
        nombre: {type: GraphQLString}
    }
});