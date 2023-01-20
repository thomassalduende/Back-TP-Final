import { Users } from "../../../Entities/Users";
import { ILike } from "typeorm";


export async function IniciarSesion(dni: number, email: string, password: string) {

    const usuario = await Users.find({
        where: {
            email: ILike(`${email}`),
            dni: dni,
            password: password
        }
    })

    if (!usuario){
        throw "ERROR, CORREO, DNI O CONTRASEÑA INVALIDAS"
    }
    
    return usuario
}