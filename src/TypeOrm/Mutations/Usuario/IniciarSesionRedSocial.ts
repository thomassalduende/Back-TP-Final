import { ILike } from "typeorm";
import { Users } from "../../../Entities/Users";
import { Carrito } from "../../../Entities/Carrito";



export async function IniciarSesionRedSocial(nombre: string, apellido: string, dni: number, email: string, password: string) {

    let user = await Users.find({
        where: {
            email: ILike(`${email}`),
            password: password
        }
    })


    if(!user[0]){

        const usuario = new Users();
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.dni = dni;
        usuario.password = password;

        await usuario.save()

        user = await Users.find({
            where: {
                email: email
            }
        })

        const carrito = new Carrito();
        carrito.users = user[0]
        await carrito.save();
    }

    return user
}