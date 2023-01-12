import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import cors from 'cors'

const app = express()
// app.use(cors());
// app.use(express.json())
const server = new ApolloServer({

})

server.applyMiddleware({app, path:'/graphql'});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))


export default app