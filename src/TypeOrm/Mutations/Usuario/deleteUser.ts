import { Users } from "../../../Entities/Users";

export async function deleteUser(email: string) {

    const usuario = await Users.find({
        where: {
            email: email
        }
    })

    if(!usuario[0]){
        throw `ERROR, EL USUARIO CON CORREO ${email} NO EXISTE`
    }

    await usuario[0].remove()
}