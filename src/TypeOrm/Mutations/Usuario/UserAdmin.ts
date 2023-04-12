import { Users } from "../../../Entities/Users";
import { existEmail } from "./existEmail";


export async function UserAdmin(nombre: string, email: string, password: string) {

    const existUser = await existEmail(email)
    console.log(existUser)

    if(existUser){
        throw "ERROR, ESTE CORREO YA ES ADMIN DE BOOKSHOP"
    }

    const usuario = new Users();
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.password = password;
    usuario.es_admin = true;

    await usuario.save();

    return usuario;
}