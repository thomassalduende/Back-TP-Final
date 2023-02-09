import express from 'express'
import { ApolloServer } from 'apollo-server-express'
// import { graphqlHTTP } from 'express-graphql'
import bodyParser from 'body-parser'
import { buildSchema } from 'type-graphql'
import { notificarMP } from './notificarMp'
import { CuponResolver } from './schema/Resolvers/CuponDescuento/resolverCupon'
import { CiudadResolver } from './schema/Resolvers/Ciudad/resolverCiudad'
import { GeneroResolver } from './schema/Resolvers/Genero/resolverGenero'
import { ProvinciaResolver } from './schema/Resolvers/Provincia/resolverProvincia'

export async function StartServer() {

    const app = express()
    // app.use(cors());
    // app.use(express.json())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers:[CuponResolver, CiudadResolver, GeneroResolver, ProvinciaResolver, ],
            validate: false
        }),
        context: ({req, res}) => ({req, res})
    });

    await server.start()

    app.post('/notificar', async (request: any, response: any) => {
        await notificarMP(request, response)
    })

    server.applyMiddleware({app, path:'/graphql'});

    // app.use('/graphql', graphqlHTTP({
    //     graphiql: true,
    //     schema: schema
    // }))

    return app;
}

