import { message } from "../../../ControlerMail/message";
import { Factura } from "../../../Entities/Factura";
import { Notificacion } from "../../../Entities/NotificarUser";
import { Users } from "../../../Entities/Users";
import { formatoFecha } from "../Utilities/formatoFecha";
import { Envio } from "../../../Entities/Envio";
import { Books } from "../../../Entities/Books";
import { Factura_detalle } from "../../../Entities/Factura_detalllada";
import { deleteItem } from "../Usuario/deleteItem";
import { sendMail } from "../../../ControlerMail/sendMail";
import { Carrito } from "../../../Entities/Carrito";
import { ConnectionBD } from "../../../db";

import { EmailPagoAprobado, EmailPagoRechazado } from "../../../ControlerMail/html-noti/notificacionEmail";
import { LineaFactura } from "../../../Entities/LineaFactura";


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
            direccion: {
                ciudad: {
                    provincia: true
                }
            },
            carrito: {
                items: {
                    book: true,
                    
                },
                cupon: true
            },

            // ciudad:true
        },
        where: {
            id: id_user
        }
    })
    // console.log(obj_user)

    const usuario = obj_user[0]

    
    // VARIABLE PARA DATOS DEL ENVIO
    nombre_user = usuario.nombre
    direccion_user = (usuario.direccion.ciudad.provincia.nombre +', '+ usuario.direccion.ciudad.nombre+', '+ usuario.direccion.direccion +', '+ usuario.direccion.ciudad.cod_postal)
    fecha = (formatoFecha(new Date())).toString()
    // console.log(usuario.direccion.ciudad.provincia.nombre +', '+ usuario.direccion.ciudad.nombre+', '+ usuario.direccion.direccion +', '+ usuario.direccion.ciudad.cod_postal)

    

    if(!usuario){
        throw new Error("EL USUARIO NO EXISTE");  
    }
    if(!usuario.direccion){
        throw new Error("DEBE COMPLETAR LOS CAMPOS DE DIRECCION PARA PODER REALIZAR LA COMPRA");
    }
        
    let mensaje = message(usuario.email, "", "", "")


    // console.log(status)


    if (status == 'approved') {
        const payment = await Factura.find({
            where: {
                paymentID_MP: paymentID_MP
            }
        })

        if (!payment[0]  && (((usuario && usuario.carrito.items) && (usuario.carrito.items.length > 0)))) {

            const array_factura = new Factura()
            const envio = new Envio()
            const linea_fac =  new LineaFactura()

            //  indicamos datos al nuevo envio
            envio.nombre = usuario.direccion.nombre
            envio.direccion = usuario.direccion.direccion
            envio.AgregarInfo = usuario.direccion.AgregarInfo
            envio.telefono = usuario.direccion.telefono
            envio.ciudad = usuario.direccion.ciudad.cod_postal
            envio.users = usuario


            for (const carrito of usuario.carrito.items) {

                const book = await Books.find({
                    where:{
                        isbn: carrito.book.isbn
                    }
                })
                // Stock del libro
                book[0].stock = book[0].stock - (+ carrito.cantidad)

                await deleteItem(id_user, carrito.book.isbn)
                await book[0].save()

                // acumulamos total
                total = total + ( carrito.cantidad *  ( + carrito.book.precio))


            }

            // controlamos el precio del libro con los descuentos
            if(usuario.carrito.items[0].book.descuento != 0.00){
                total = total - ( total * usuario.carrito.items[0].book.descuento / 100)

            }

           
            if(usuario.carrito.cupon != null) {

                total = total - ( total * usuario.carrito.cupon.cantidad_descuento / 100)

                // await ConnectionBD
                //     .createQueryBuilder()
                //     .update(Carrito)
                //     .set({cupon: null})
                //     .where("id_user = id_user", {id: usuario.id})
                //     .execute()
            }
           
            //  indicamos datos a linea factura
            linea_fac.isbn = usuario.carrito.items[0].book;
            linea_fac.cantidad = usuario.carrito.items[0].cantidad;
            linea_fac.precio_unitario = usuario.carrito.items[0].book.precio;
            linea_fac.carrito = usuario.carrito;

            //  indicamos datos a la nueva factura
            array_factura.users = usuario
            array_factura.fecha = (formatoFecha(new Date())).toString()
            array_factura.monto = total
            array_factura.paymentID_MP = paymentID_MP
            array_factura.ciudad = usuario.direccion.ciudad.cod_postal
            array_factura.book = usuario.carrito.items[0].book.isbn
        

            await envio.save()
            array_factura.envio = envio;
            await array_factura.save()

            // agregamos datos a factura detalle
            const fac_detallada = new Factura_detalle()

            fac_detallada.precio = total / 2
            fac_detallada.cantidad = usuario.carrito.items[0].cantidad
            fac_detallada.book = usuario.carrito.items[0].book
            fac_detallada.factura = array_factura

            await fac_detallada.save()
              
            
            // datos a la tabla notificaciones
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
            mensaje.html = EmailPagoAprobado('COMPRA APROBADA, disfrute de sus libros comprados en BookShop.', nombre_user, direccion_user, paymentID_MP, fecha ,total)


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