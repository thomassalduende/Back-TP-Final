import { Users } from "../../../Entities/Users";
import { getUsuarioMail } from "../../Querys/Usuario/getUsuarioMail";

export async function updateUser(nombre: string,apellido: string, email: string, password: string, user: Users) {

    if ((nombre.length + (+apellido.length) + (+email.length) + (+password.length)) == 0){

        throw `ERROR, TODOS LOS CAMPOS DEBES ESTAR COMPLETOS`
    }

    if (nombre != null){
        user.nombre = nombre;
    }

    if(apellido != null){
        user.apellido = apellido;
    }

    if((email != null) && (user.email != email)){
        const existEmail = await getUsuarioMail(email)

        if(existEmail){
            throw `ERROR, EL CORREO ${email} YA EXISTE`
        }
        user.email = email;
    }

    if(password != null){
        user.password = password;
    }

    await user.save()
    
}