import { Genero } from "../../../Entities/Genero";


export async function getGeneroId(id: string) {

    const idGenero = parseInt(id)

    const genero = await Genero.find({
        where: {
            id_genero: idGenero
        }
    })
    console.log(genero)

    return genero;
}