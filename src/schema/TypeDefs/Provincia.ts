import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const Provincia = new GraphQLObjectType({
    name: 'provincia',
    fields: {
        id_provicia: {type: GraphQLID},
        nombre: {type: GraphQLString}
    }
});