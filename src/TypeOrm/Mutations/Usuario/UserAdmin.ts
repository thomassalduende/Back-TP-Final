import { Users } from "../../../Entities/Users";
import { Carrito } from "../../../Entities/Carrito";
import { ILike } from "typeorm";


export async function UserAdmin(nombre: string, email: string, password: string) {

    let user = await Users.find({
        where: {
            email: ILike(`${email}`)
        }
    })

    if(user[0]){
        throw "ERROR, ESTE CORREO YA ES ADMIN DE BOOKSHOP"
    }

    const usuario = new Users();
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.password = password;
    usuario.es_admin = true;

    await usuario.save();

    return user;


}