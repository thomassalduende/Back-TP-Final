import { insertCiudad } from "../../../Querys_typeorm/Ciudad/insertCiudad";
import { Send } from "../../../TypesDefs/Send";


export async function InsertCiudad(nombre: string, nombreProv: string) {

    const message = new Send()

    try{
        await insertCiudad(nombre, nombreProv)

        message.message = 'CIUDAD INSERTADA CON EXITO'
        message.success = true;

        return message
    }catch(error: any){
        message.message = error
        message.success = false

        return message
    }  
}






