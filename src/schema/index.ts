import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getAllUsers } from "./Querys/User/getAllUsers";
import { getUserID } from "./Querys/User/getUserID";
import { CreateUser } from "./Mutations/User/createUser";
import { DeleteUser } from "./Mutations/User/deleteUser";
import { UpdateUser } from "./Mutations/User/updateUser";
import { CreateBook } from "./Mutations/Book/createBook";
import { DeleteBook } from "./Mutations/Book/deleteBook";
import { UpdateBook } from "./Mutations/Book/updateBook";
import { getAllBook } from "./Querys/Book/getAllBook";
import { getBookISBN } from "./Querys/Book/getBookISBN";
import { getBookNombre } from "./Querys/Book/getBookNombre";

const RootQuery =  new GraphQLObjectType({
    name: 'query',
    fields: {
        getAllUsers: getAllUsers,
        getUserID: getUserID,

        getAllBook: getAllBook,
        getBookISBN: getBookISBN, 
        getBookNombre: getBookNombre
    }
})

const Mutations = new GraphQLObjectType({
    name: 'mutations',
    fields:{
        CreateUser: CreateUser,
        DeleteUser: DeleteUser,
        UpdateUser: UpdateUser,

        CreateBook: CreateBook,
        DeleteBook: DeleteBook,
        UpdateBook: UpdateBook,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
})

