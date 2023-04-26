import { Genero } from "../../../Entities/Genero";
import { ILike } from "typeorm";

export async function updateGenero(nombre_orig: string, nombre: string, url_imagen: string) {

    const genero = await Genero.find({
        where: {
            nombre:  ILike(`${nombre_orig}`)
        }
    })

    if (nombre && nombre.length > 0){
        genero[0].nombre = nombre;
    }

    if (url_imagen && url_imagen.length > 0){
        genero[0].url_imagen = url_imagen;
    }

    await genero[0].save()
    
}










