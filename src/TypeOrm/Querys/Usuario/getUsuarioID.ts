import { Users } from "../../../Entities/Users";

export async function getUsuarioID(id: number) {

    const usuario = await Users.find({
        relations: {
            direccion: {
                ciudad: {
                    provincia: true
                }
            }
        },
        where: {
            id: id
        }
    })

    return usuario;
    
}