import { existsNombre } from "../Utilities/Exists";
import { Genero } from "../../Entities/Genero";

export async function insertGenero(nombreGenero: string, url_imagen: string) {

    const existeGenero = existsNombre(nombreGenero, Genero)

    if(!existeGenero){
        const genero = new Genero();
        genero.nombre = nombreGenero;
        genero.url_imagen = url_imagen;

        await genero.save()
    }

}