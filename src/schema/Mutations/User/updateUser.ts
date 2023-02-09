import { getUsuarioMail } from "../../../TypeOrm/Querys/Usuario/getUsuarioMail";
import { getUsuarioDNI } from "../../../TypeOrm/Querys/Usuario/getUsuarioDNI";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";
import { Send } from "../../../TypesDefs/Send";
import { updateUser } from "../../../TypeOrm/Mutations/Usuario/updateUser";


async function UpdateUserMail(nombre: string, apellido: string, email_orig: string, email: string, password: string) {
    
    const message = new Send()

    try {
        const user = await getUsuarioMail(email_orig)
        await updateUser(nombre, apellido, email, password, user)

        message.message = 'User modificado'
        message.success = true

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}

async function UpdateUserToken(tokenUser: string, nombre: string, apellido: string, email: string, password: string) {

    const message = new Send()

    try{
        const dni = parseInt(<string>verify(tokenUser, <string>JWT_SECRET))

        const user = await getUsuarioDNI(dni)
        await updateUser(nombre, apellido, email, password, user[0])

        message.message = 'User modificado'
        message.success = true

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}

export async function UpdateUser(args: any) {

    if(args.tokenUser != ''){
        return await UpdateUserToken(args.tokenUser, args.nombre, args.apellido, args.email_orig, args.password)

    }else if(args.email_orig != ''){
        return UpdateUserMail(args.nombre, args.apellido, args.email_orig, args.email, args.password)
    }
    
    const message = new Send()
    message.message = 'Error, debe ingresar token o email para modificar el user'
    message.success = false;

    return message;
}