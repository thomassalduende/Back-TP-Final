import { agregarValoracion } from "../../../TypeOrm/Mutations/Usuario/agregarValoracion";
import { verify } from "jsonwebtoken";
import { Send } from "../../../TypesDefs/Send";

export async function AgregarValoracion(cantidad_estrellas: number, isbn: string, tokenUser: string) {

    const message = new Send()

    try{
        const id = parseInt(<string>verify(tokenUser,  'secret-key'))

        await agregarValoracion(cantidad_estrellas, isbn, id)

        message.message = "Opinion agregada correctamente";
        message.success = true;

        return message;

    }catch(error: any) {
        message.message = error;
        message.success = false;

        return message;
    }
}