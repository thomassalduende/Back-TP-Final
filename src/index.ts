import 'reflect-metadata'
import app from './app'
import {ConnectionBD} from './db'
import {PORT} from './config'

async function main() {
    try {
        await ConnectionBD.initialize()
        app.listen(PORT)
        console.log('Listen on port ', PORT)
        
    } catch (error) {  
        console.log(error)      
    }   
}
main()

