import { Ciudad } from '../../../Entities/Ciudad';
import { Direccion } from '../../../Entities/Direccion_user';
import { Users } from '../../../Entities/Users';


export async function insertDireccion(dni: number, direccion: string, informacion: string, telefono: number, cod_postal: number) {

    let usuario = await Users.find({
        relations: {
            direccion: true
        },
        where: {
            dni: dni
        }
    })

    let Direc = await Direccion.find({
        where: {
            users: {
                dni: usuario[0].dni
            }
        }
    })

    const ciudad = await Ciudad.find({
        where: {
            cod_postal: cod_postal
        }
    })

    let Direcciones = new Direccion();

    if (!Direc[0] && ciudad[0]){
        Direcciones.direccion = direccion;
        Direcciones.AgregarInfo = informacion;
        Direcciones.telefono = telefono;
        Direcciones.ciudad = ciudad[0];
        Direcciones.users = usuario[0];

        await Direcciones.save()

    }else if(usuario[0].direccion && ciudad[0]){

        Direcciones = Direc[0]

        Direcciones.direccion = direccion;
        Direcciones.AgregarInfo = informacion;
        Direcciones.telefono = telefono;
        Direcciones.ciudad = ciudad[0];

        await Direcciones.save()
    }

    usuario = await Users.find({
        relations: {
            direccion: {
                ciudad: {
                    provincia: true
                }
            }
        },
        where: {
            dni: dni
        }
    })

    return usuario



    
}