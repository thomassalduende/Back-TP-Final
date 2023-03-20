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

import { EmailPagoAprobado, EmailPagoRechazado } from "../../../ControlerMail/html-noti/notificacionEmail";


export async function crearFacura(items: Array<any>, paymentID_MP: string, status: string) {

    let total: number = 0;
    let subject: string;
    let messageText: string;
    let fecha: string;
    let nombre_user: string;
    let direccion_user: string;

    let factura = new Factura()

    const id_user = items[0].id_user

    const obj_user = await Users.find({
        relations: {
            direccion: true,
            carrito: {
                items: {
                    book: true
                }
            }
        },
        where: {
            id: id_user
        }
    })
    console.log(obj_user)

    const usuario = obj_user[0]

    console.log(usuario)
    console.log(usuario.ciudad)
    console.log(usuario.ciudad.nombre)
    console.log(usuario.ciudad.provincia.nombre)
    
    nombre_user = usuario.nombre
    direccion_user = usuario.direccion.direccion +usuario.ciudad.provincia.nombre
    fecha = (formatoFecha(new Date())).toString()

    if(!usuario){
        throw new Error("EL USUARIO NO EXISTE");  
    }
        
    let mensaje = message(usuario.email, "", "", "")


    console.log(status)
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
            envio.direccion = usuario.direccion.direccion
            envio.AgregarInfo = usuario.direccion.AgregarInfo
            envio.telefono = usuario.direccion.telefono
            envio.ciudad = usuario.direccion.ciudad
            envio.users = usuario

            for (const carrito of usuario.carrito.items) {

                total = total +(CalcularTotal(carrito.cantidad, carrito.book.precio))
            }

            array_factura.users = usuario
            array_factura.fecha = (formatoFecha(new Date())).toString()
            array_factura.monto = total
            array_factura.paymentID_MP = paymentID_MP


            // Me fijo si existe el descuento, si existe lo aplico y lo elimino
            if (usuario.carrito.cupon != null){

                array_factura.cupon = usuario.carrito.cupon
                array_factura.monto = array_factura.monto - (+ total * (usuario.carrito.cupon.cantidad_descuento/100))

                await ConnectionBD
                    .createQueryBuilder()
                    .update(Carrito)
                    .set({cupon: null})
                    .where("id =: id", {idUser: usuario.id})
                    .execute()
            }

            await envio.save()
            array_factura.envio = envio;
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

                await deleteItem(id_user, carrito.book.isbn)
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
            // mensaje.html = notificacionEmail('COMPRA APROBADA:', paymentID_MP)
            mensaje.html = EmailPagoAprobado('COMPRA APROBADA, disfrute de sus libros comprados en BookShop.', nombre_user, direccion_user, paymentID_MP, fecha)


            await sendMail(mensaje)

            factura = array_factura
        }
    }else if(status == 'in_process'){

            const notificacion = new Notificacion()
            notificacion.notificacion = `COMPRA PENDIENTE\nTICKET: N° ${paymentID_MP}`
            notificacion.users = obj_user[0]
            await notificacion.save()

            // MENSAJE POR MAIL

            subject = 'PAGO PENDIENTE'
            messageText = `PAGO PENDIENTE. NO SE HA PODIDO CONCRETAR POR EL MOMENTO \nTICKET: N° ${paymentID_MP}`

            mensaje.subject = subject
            mensaje.text = messageText
            // mensaje.html = notificacionEmail('PAGO PENDIENTE. NO SE HA PODIDO CONCRETAR POR EL MOMENTO', paymentID_MP)
            mensaje.html = EmailPagoRechazado('PAGO PENDIENTE. NO SE HA PODIDO CONCRETAR POR EL MOMENTO', nombre_user, paymentID_MP)

            await sendMail(mensaje)
        
    }else if(status == 'rejected'){

            const notificacion = new Notificacion()
            notificacion.notificacion = `COMPRA RECHAZADA`
            notificacion.users = obj_user[0]
            await notificacion.save()

            // Notificar por email

            subject = 'PAGO RECHAZADO'
            messageText = `PAGO RECHAZADO \nTICKET: N° ${paymentID_MP}`

            mensaje.subject = subject
            mensaje.text = messageText
            // mensaje.html = notificacionEmail('COMPRA RECHAZADA', paymentID_MP)
            mensaje.html = EmailPagoRechazado('COMPRA RECHAZADA', nombre_user, paymentID_MP)

            await sendMail(mensaje)
    }
    
}