import { verify } from "jsonwebtoken";
import { ExistFav } from "../../../TypeOrm/Querys/Usuario/ExistFav";
import { SendFavoritos } from "../../../TypesDefs/SendFavoritos";
import { measureMemory } from "vm";


export async function existFav(tokenUser: string, isbn: string){

    const message = new SendFavoritos()

    try{
        const id = parseInt(<string>verify(tokenUser, 'secret-key'));

        const faveado = await ExistFav(id, isbn);

        if(faveado) {
            message.message = 'Book en favoritos'
        }else{
            message.message = 'No se encuentra en favoritos'
        }

        message.success = true;

        return message;
    }catch(error: any){
        message.message = error;
        message.success = false;
    }
}