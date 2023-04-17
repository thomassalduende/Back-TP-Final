import { Genero } from "../../../Entities/Genero";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function insertGenero(nombreGenero: string, url_imagen: string){

    const genero = new Genero();
        
    genero.nombre = nombreGenero;
    genero.url_imagen = url_imagen;

    await genero.save()
}