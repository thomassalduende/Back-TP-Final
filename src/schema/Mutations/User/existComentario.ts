import { ExistComentario } from "../../../TypeOrm/Mutations/Usuario/ExistComentario";
import { SendComentarios } from "../../../TypesDefs/SendComentarios";
import { verify } from "jsonwebtoken";
import { libroComprado } from "../../../TypeOrm/Querys/Usuario/libroComprado";


export async function existComentario(isbn: string, tokenUser: string){

    const message = new SendComentarios()

    try {

        const id = parseInt(<string>verify(tokenUser, 'secret-key'))
        const comentarios = await ExistComentario(isbn, id)
        const comprado = await libroComprado(isbn, id)

        if(comentarios){
            message.message = 'Libro comentado'
            message.success = true;
        }else {
            message.message = 'Libro no comentado'
            message.success = false;
        }
        message.comentario = comentarios;
        message.comprado = comprado

        return message;
        
    }catch(error: any) {
        message.message = error
        message.success = false;

        return message;
    }

}