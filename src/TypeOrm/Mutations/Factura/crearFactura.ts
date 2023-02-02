import { Like } from "typeorm";
import { message } from "../../../ControlerMail/message";
import { Direccion } from "../../../Entities/Direccion_user";
import { Factura } from "../../../Entities/Factura";
import { Notificacion } from "../../../Entities/NotificarUser";
import { Users } from "../../../Entities/Users";
import { CalcularTotal } from "../Utilities/CacularTotal";
import { formatoFecha } from "../Utilities/formatoFecha";

async function NotiRepetida(paymentID: string) {

    const notificacion = await Notificacion.find({
        where: {
            notificacion: Like(`%${paymentID}%`)
        }
    })

    return (!notificacion[0])? true : false
}

export async function crearFacura(items: Array<any>, paymentID_MP: string, status: string) {

    let total: number = 0;
    let topic: string;
    let messageText: string;

    let factura = new Factura()

    const dniUser = items[0].dni

    const obj_user = await Users.find({
        relations: {
            direccion: true,
            carrito: {
                cupon: true,
                items: {
                    book: true
                }
            }
        },
        where: {
            dni: dniUser
        }
    })

    const usuario = obj_user[0]

    if(!usuario){
        throw new Error("EL USUARIO NO EXISTE");  
    }
        
    let mensaje = message(usuario.email, "", "", "")

    if (status == 'approved') {
        const payment = await Factura.find({
            where: {
                paymentID_MP: paymentID_MP
            }
        })

        if (!payment[0]  && (((usuario && usuario.carrito.items) && (usuario.carrito.items.length > 0)))) {

            const array_factura = new Factura()
            const direccion = new Direccion()

            direccion.nombre = usuario.direccion.nombre
            direccion.apellido = usuario.direccion.apellido
            direccion.direccion = usuario.direccion.direccion
            direccion.AgregarInfo = usuario.direccion.AgregarInfo
            direccion.telefono = usuario.direccion.telefono
            direccion.ciudad = usuario.direccion.ciudad
            direccion.users = usuario

            for (const carrito of usuario.carrito.items) {

                total = total +(CalcularTotal(carrito.cantidad, carrito.book.precio))
            }

            array_factura.users = usuario
            array_factura.fecha = (formatoFecha(new Date())).toString()
            array_factura.monto = total
            array_factura.paymentID_MP = paymentID_MP
        }
    }
    
}