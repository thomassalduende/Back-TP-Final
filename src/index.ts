import 'reflect-metadata'
// import app from './app'
import {ConnectionBD} from './db'
import {PORT} from './config'
import { StartServer } from './app'

async function main() {
    try {
        await ConnectionBD.initialize()
        const app = await StartServer()
        app.listen(PORT)
        console.log(`Server initialize on http://localhost:${PORT}/graphql`)
        
    } catch (error) {  

        console.log(error)      
    }   
}
main()

