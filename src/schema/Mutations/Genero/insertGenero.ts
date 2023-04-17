import { Genero } from "../../../Entities/Genero";
import { insertGenero } from "../../../TypeOrm/Mutations/Genero/insertGenero";
import { existsNombre } from "../../../TypeOrm/Mutations/Utilities/Exists";
import { Send } from "../../../TypesDefs/Send";

export async function InsertGenero(nombre: string, url_imagen: string) {

    const message = new Send()

    try{
        const existGenero = await existsNombre(nombre, Genero)

        if (!existGenero){
            await insertGenero(nombre, url_imagen)

            message.message = 'GENERO INSERTADO'
            message.success = true

        }else {
            message.message = 'GENERO YA EXISTE'
            message.success = false
        }
        
        return message;
    }catch(error: any){

        message.message = error;

        return message;
    }
}