import { Genero } from "../../../Entities/Genero";
import { ILike } from "typeorm";


export async function deleteGenero(nombreGenero: string) {

    const genero = await Genero.find({
        where: {
            nombre:  ILike(`${nombreGenero}`)
        }
    })

    console.log(genero)

    if (!genero){

        throw `ERROR, NO EXISTE EL GENERO ${nombreGenero}`
    }
        
    await genero[0].remove()
}