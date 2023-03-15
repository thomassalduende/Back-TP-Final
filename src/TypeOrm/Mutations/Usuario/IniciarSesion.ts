import { Users } from "../../../Entities/Users";
import { ILike } from "typeorm";


export async function IniciarSesion(email: string, password: string) {

    const usuario = await Users.find({

        relations:{
            direccion:{
                ciudad: true
            },
            notificacion: true,
            carrito: true,
            factura: true
        },
        
       where:{
            email: ILike(`${email}`),
            password: password
        },

        order: {
            notificacion: {
                id: "DESC"
            }
        }
    })

    if (!usuario[0]){
        throw "ERROR, CORREO O CONTRASEÑA INVALIDAS"
    }
    
    return usuario
}