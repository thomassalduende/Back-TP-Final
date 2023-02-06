import { Like } from "typeorm";
import { message } from "../../../ControlerMail/message";
import { Factura } from "../../../Entities/Factura";
import { Notificacion } from "../../../Entities/NotificarUser";
import { Users } from "../../../Entities/Users";
import { CalcularTotal } from "../Utilities/CacularTotal";
import { formatoFecha } from "../Utilities/formatoFecha";
import { ConnectionBD } from "../../../db"
import { Carrito } from "../../../Entities/Carrito";
import { Envio } from "../../../Entities/Envio";
import { Books } from "../../../Entities/Books";
import { Factura_detalle } from "../../../Entities/Factura_detalllada";
import { deleteItem } from "../Usuario/deleteItem";
import { sendMail } from "../../../ControlerMail/sendMail";


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
    let subject: string;
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
            const envio = new Envio()

            envio.nombre = usuario.direccion.nombre
            envio.apellido = usuario.direccion.apellido
            envio.direccion = usuario.direccion.direccion
            envio.AgregarInfo = usuario.direccion.AgregarInfo
            envio.telefono = usuario.direccion.telefono
            envio.ciudad = usuario.direccion.ciudad
            envio.users = usuario

            array_factura.users = usuario
            array_factura.fecha = (formatoFecha(new Date())).toString()
            array_factura.monto = total
            array_factura.paymentID_MP = paymentID_MP

            for (const carrito of usuario.carrito.items) {

                total = total +(CalcularTotal(carrito.cantidad, carrito.book.precio))
            }


            // Me fijo si existe el descuento, si existe lo aplico y lo elimino
            if (usuario.carrito.cupon != null){

                array_factura.cupon = usuario.carrito.cupon
                array_factura.monto = array_factura.monto - (+ total * (usuario.carrito.cupon.cantidad_descuento/100))

                await ConnectionBD
                    .createQueryBuilder()
                    .update(Carrito)
                    .set({cupo: null})
                    .where("dni =: dni", {dniUser: usuario.dni})
                    .execute()
            }

            await envio.save()
            array_factura.envio = envio
            await array_factura.save()



            // Controlamos el stock del libro comprado

            for (const carrito of usuario.carrito.items){
                const book = await Books.find({
                    where:{
                        isbn: carrito.book.isbn
                    }
                })
                book[0].stock = book[0].stock - (+ carrito.cantidad)

                const fac_detallada = new Factura_detalle()

                fac_detallada.precio = carrito.book.precio
                fac_detallada.cantidad = carrito.cantidad
                fac_detallada.book = carrito.book
                fac_detallada.factura = array_factura

                await deleteItem(dniUser, carrito.book.isbn)
                await fac_detallada.save()
                await book[0].save()
            }

            const notificacion = new Notificacion()
            notificacion.notificacion = `COMPRA APROBADA\nTICKET: N° ${paymentID_MP}`
            notificacion.users = usuario;
            await notificacion.save()


            // NOTIFICAR POR EMAIL

            subject = 'COMPRA APROBADA'
            messageText = `PAGO EXITOSO\nTICKET: N° ${paymentID_MP}`

            mensaje.subject = subject
            mensaje.text = messageText
            // mensaje.html = falta agregar

            await sendMail(mensaje)

            factura = array_factura
        }
    }else if(status == 'in_process'){

        if(await NotiRepetida(paymentID_MP)){

            const notificacion = new Notificacion()
            notificacion.notificacion = `COMPRA PENDIENTE\nTICKET: N° ${paymentID_MP}`
            notificacion.users = obj_user[0]
            await notificacion.save()

            // MENSAJE POR MAIL

            subject = 'PAGO PENDIENTE'
            messageText = `PAGO PENDIENTE. NO SE HA PODIDO CONCRETAR POR EL MOMENTO \nTICKET: N° ${paymentID_MP}`

            mensaje.subject = subject
            mensaje.text = messageText
            // mensaje.text = html falta agregar

            await sendMail(mensaje)
        }
    }else if(status == 'rejected'){

        if(await NotiRepetida(paymentID_MP)){

            const notificacion = new Notificacion()
            notificacion.notificacion = `COMPRA RECHAZADA`
            notificacion.users = obj_user[0]
            await notificacion.save()

            // Notificar por email

            subject = 'PAGO RECHAZADO'
            messageText = `PAGO RECHAZADO \nTICKET: N° ${paymentID_MP}`

            mensaje.subject = subject
            mensaje.text = messageText
            // mensaje.html = html 

            await sendMail(mensaje)
        }
    }
    
}