import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";
import { Genero } from "../../Entities/Genero";


export async function deleteGenero(nombreGenero: string) {

    const existeGenero = existsNombre(nombreGenero, Genero)

    if (!existeGenero)
        throw `ERROR, NO EXISTE EL GENERO ${nombreGenero}`


    const genero = await getElementByNombre(nombreGenero, Genero)

    await genero[0].remove()
}