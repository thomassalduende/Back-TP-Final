import { sign, verify } from "jsonwebtoken"
import { JWT_SECRET } from "../../../config";
import { IniciarSesion } from "../../../TypeOrm/Mutations/Usuario/IniciarSesion";
import { IniciarSesionRedSocial } from "../../../TypeOrm/Mutations/Usuario/IniciarSesionRedSocial";
import { getUsuarioDNI } from "../../../TypeOrm/Querys/Usuario/getUsuarioDNI";
import { SendUser } from "../../../TypesDefs/SendUser";


async function iniciarSesionRedSocial(nombre: string, apellido: string, dni: number, email: string, password: string) {

    const message = new SendUser()

    try{
        const user = await IniciarSesionRedSocial(nombre, apellido, dni, email, password)

        const dni_user: string = user[0].dni.toString()

        message.message = 'User logueado'
        message.success = true;
        message.accessToken = sign(dni_user, <string>JWT_SECRET)
        message.user = user[0];

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}

async function IniciarSesionCorreoyContraseña(args: any): Promise<SendUser> {

    const message = new SendUser()

    try{
        const user = await IniciarSesion(args.email, args.password)

        const dni_user: string = user[0].dni.toString()

        message.message = 'User logueado'
        message.success = true;
        message.accessToken = sign(dni_user, <string>JWT_SECRET)
        message.user = user[0];
        return message;

    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}

async function getTokerUser(tokenUser: string): Promise<SendUser> {

    const message = new SendUser()

    let dni_string = ''

    try{
        dni_string = <string>verify(tokenUser, <string>JWT_SECRET)

    }catch(error: any){
        message.message = 'TokerUser invalido'
        message.success = false

        return message;
    }


    try{

        const dni_num: number = parseInt(dni_string);

        const user = await getUsuarioDNI(dni_num);

        message.message = 'User logueado'
        message.success = true;
        message.accessToken = tokenUser;
        message.user = user[0];

        return message;
    }catch(error: any){

        message.message = error
        message.success = false

        return message;
    }
}

export async function getLoginUser(args: any) {

    if( args.nombre != '' && (args.apellido != '' && (args.password != '' && (args.password != null)))){

        return await iniciarSesionRedSocial(args.nombre, args.apellido,args.dni, args.email, args.password)

    }else if(args.email != '' && (args.password != '' && (args.password != null))){

        return await IniciarSesionCorreoyContraseña(args)
    
    }else if(args.tokenUser != ''){

        return await getTokerUser(args.tokenUser)
    }

    return new SendUser()
    
}