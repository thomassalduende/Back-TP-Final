import { ACCESS_TOKEN_MP } from "./config";
import { crearFacura } from "./TypeOrm/Mutations/Factura/crearFactura";

const mercadopago = require("mercadopago")

export const notificarMP = async (request: any, response: any) => {

    try{
        mercadopago.configure({access_token: ACCESS_TOKEN_MP})

        const { query } = request

        let payment: any

        const subject = query.topic || query.type;

        if(subject == "payment"){

            const paymentID = query.id || query['data.id'];
            payment = await mercadopago.payment.findById(paymentID)

            const items = payment.body.adittional_info.items
            const status = payment.body.status

            await crearFacura(items, paymentID, status)

            response.status(200)
        }else{
            response.status(404)
        }
    }catch(error: any){
        console.log(error)
        return error
    }
}