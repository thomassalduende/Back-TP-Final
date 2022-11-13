import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getAllUsers } from "./Querys/getAllUsers";
import { getUserID } from "./Querys/getUserID";
import { CreateUser } from "./Mutations/User/createUser";
import { DeleteUser } from "./Mutations/User/deleteUser";
import { UpdateUser } from "./Mutations/User/updateUser";

const RootQuery =  new GraphQLObjectType({
    name: 'query',
    fields: {
        getAllUsers: getAllUsers,
        getUserID: getUserID
    }
})

const Mutations = new GraphQLObjectType({
    name: 'mutations',
    fields:{
        CreateUser: CreateUser,
        DeleteUser: DeleteUser,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
})

