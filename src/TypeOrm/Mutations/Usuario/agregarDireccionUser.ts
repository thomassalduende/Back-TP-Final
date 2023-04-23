import { Ciudad } from '../../../Entities/Ciudad';
import { Direccion } from '../../../Entities/Direccion_user';
import { Users } from '../../../Entities/Users';
import { InsertCiudad } from '../../../schema/Mutations/Ciudad/insertCiudad';
import { insertCiudad } from '../Ciudad/insertCiudad';


export async function agregarDireccionUser(id: number, nombre:string,  dni: string, nombre_ciudad: string, nombre_prov: string, direccion: string, informacion: string, telefono: string, cod_postal: string) {

    let usuario = await Users.find({
        relations: {
            direccion: true
        },
        where: {
            id: id,
        }
    })

    let Direc = await Direccion.find({
        where: {
            users: {
                id: usuario[0].id
            }
        }
    })

    const ciudad = await Ciudad.find({
        where: {
            cod_postal: cod_postal
        }
    })
    console.log(ciudad[0])

    console.log(ciudad.length)
    if(ciudad.length == 0){
        await insertCiudad(nombre_ciudad, nombre_prov, cod_postal)

        const ciudad = await Ciudad.find({
            where: {
                cod_postal: cod_postal
            }
        })

        let Direcciones = new Direccion();

        if (!Direc[0] && ciudad[0]){
            Direcciones.nombre = nombre;
            Direcciones.dni = dni;
            Direcciones.direccion = direccion;
            Direcciones.AgregarInfo = informacion;
            Direcciones.telefono = telefono;
            Direcciones.ciudad = ciudad[0];
            Direcciones.users = usuario[0];

            await Direcciones.save()

        }else if(usuario[0].direccion && ciudad[0]){

            Direcciones = Direc[0]
            Direcciones.dni = dni;
            Direcciones.direccion = direccion;
            Direcciones.AgregarInfo = informacion;
            Direcciones.telefono = telefono;
            Direcciones.ciudad = ciudad[0];

            await Direcciones.save()
        }
    }

    let Direcciones = new Direccion();

    if (!Direc[0] && ciudad[0]){
        Direcciones.nombre = nombre;
        Direcciones.dni = dni;
        Direcciones.direccion = direccion;
        Direcciones.AgregarInfo = informacion;
        Direcciones.telefono = telefono;
        Direcciones.ciudad = ciudad[0];
        Direcciones.users = usuario[0];

        await Direcciones.save()

    }else if(usuario[0].direccion && ciudad[0]){

        Direcciones = Direc[0]
        Direcciones.nombre = nombre;
        Direcciones.dni = dni;
        Direcciones.direccion = direccion;
        Direcciones.AgregarInfo = informacion;
        Direcciones.telefono = telefono;
        Direcciones.ciudad = ciudad[0];

        usuario[0].nombre = nombre;

        await usuario[0].save();
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
            id: id
        }
    })

    return usuario
}