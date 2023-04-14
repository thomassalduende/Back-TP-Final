import { existsNombre } from "../Utilities/Exists";
import { Genero } from "../../../Entities/Genero";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function insertGenero(nombreGenero: string, url_imagen: string) : Promise<Genero>{

    const existeGenero = await existsNombre(nombreGenero, Genero)
    console.log(existeGenero)

    if(existeGenero){
        throw `ERROR, EL GENERO ${nombreGenero} YA EXISTE`
    }
    const genero = new Genero();
        
    genero.nombre = nombreGenero;
    genero.url_imagen = url_imagen;

    await genero.save()

    return getElementByNombre(nombreGenero, Genero)

}