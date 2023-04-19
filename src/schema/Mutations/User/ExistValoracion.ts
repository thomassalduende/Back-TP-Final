import { existValoracion } from "../../../TypeOrm/Mutations/Usuario/existValoracion";
import { SendValoracion } from "../../../TypesDefs/SendValoracion";
import { verify } from "jsonwebtoken";



export async function ExistValoracion(isbn: string, tokenUser: string){

    const message = new SendValoracion()

    try {

        const id = parseInt(<string>verify(tokenUser, 'secret-key'))
        const valoracion = await existValoracion(isbn, id)

        if(valoracion){
            message.message = 'Libro valorado'
            message.success = true;
        }else {
            message.message = 'Libro no valorado'
            message.success = false;
        }
        message.id_user = id;

        return message;
        
    }catch(error: any) {
        message.message = error
        message.success = false;

        return message;
    }

}