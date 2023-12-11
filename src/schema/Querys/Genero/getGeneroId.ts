import { getGeneroId } from "../../../TypeOrm/Querys/Genero/getGeneroId";
import { SendGenero } from "../../../TypesDefs/SendGenero";


export async function GetGeneroId(id: string) {

    const message = new SendGenero()

    try {

        const generos = await getGeneroId(id)

        message.message = 'Genero obtenido'
        message.success = true;
        message.genero = generos[0];

        return message;
    } catch (error: any) {

        message.message = error;
        message.success = false

        return message;
    }
}