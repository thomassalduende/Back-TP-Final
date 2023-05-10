
import { Users } from "../../../Entities/Users";
import { getCarrito } from "./getCarrito";

const mercadopago = require("mercadopago")

function Items(user: Users): Array<any> {

    let items: Array<any> = []

    if(user.carrito.items){

        user.carrito.items.forEach(item => {

            const descuento_libro = item.book.descuento

            const PrecioTotal = item.book.precio
            let precio = PrecioTotal

            console.log(user.carrito.cupon)

            if(descuento_libro != 0.00){

                precio = precio - ( precio * descuento_libro / 100)
                console.log("precio con descuento: ", precio)
            }

            if (user.carrito.cupon != null){

                precio = precio - ( precio * user.carrito.cupon.cantidad_descuento / 100)
                console.log("precio con cupon: ", precio)

                // user.carrito.cupon.remove()
                // user.carrito.cupon.save()
            }

            items.push({
                id: user.id,
                title: item.book.nombre,
                quantity: (+item.cantidad),
                currency_id: "ARS",
                category: "Book",
                unit_price: +precio
            });
        });
    }
    return items
}


async function CrearLinkMercadoPago(user: Users, items: any): Promise<string> {

    const linkFront = 'http://localhost:5173'
    mercadopago.configure({access_token: 'TEST-2852943679564217-013020-ad2b8c721723039500da72ea560d9926-159107565'});

    const preference = {
        payer:{
            name: user.nombre,
            email: user.email
        },
        items: items,
        back_urls:{
            success: `${linkFront}/checkout/success`,
            failure: `${linkFront}/checkout/failure`,
            pending: `${linkFront}/checkout/pending`,
            return: `${linkFront}`
        },
        auto_return: 'approved',
        notification_url: ' https://00ea-190-138-66-163.ngrok-free.app/pagos/notificacion'
        
    };

    const link = mercadopago.preferences.create(preference)
    .then(function (response: any){
        return response.body.sandbox_init_point;
        // return response.redirect(response.body.init_point)
    })
    .catch(function (error: any){
        //console.log(preference);
        console.log(error);
        return null;
    });

    return link
    
}

export async function realizarCompra(id: number): Promise<string>{

    let res = ""

    const user = await getCarrito(id)

    if(user){

        const items = Items(user[0])

        res = await CrearLinkMercadoPago(user[0], items)
        console.log(res)
    }
    return res;
}