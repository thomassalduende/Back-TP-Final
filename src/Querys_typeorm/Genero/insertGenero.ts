import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";
import { Genero } from "../../Entities/Genero";

export async function insertGenero(nombreGenero: string) : Promise<Genero> {

    const existeGenero = existsNombre(nombreGenero, Genero)

    if(!existeGenero){
        const genero = new Genero();
        genero.nombre = nombreGenero;
        await genero.save()
    }

    return getElementByNombre(nombreGenero, Genero)
}