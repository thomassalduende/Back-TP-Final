import { Users } from "../../../Entities/Users";

export async function deleteUser(dni: number) {

    const usuario = await Users.find({
        where: {
            dni: dni
        }
    })

    if(!usuario[0]){
        throw `ERROR, EL USUARIO CON DNI ${dni} NO EXISTE`
    }

    await usuario[0].remove()
}