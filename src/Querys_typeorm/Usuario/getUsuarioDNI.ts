import { Users } from "../../Entities/Users";

export async function getUsuarioDNI(dni: number) {

    const usuario = await Users.find({
        where: {
            dni: dni
        }
    })

    return usuario;
    
}