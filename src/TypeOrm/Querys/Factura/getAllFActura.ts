import { Factura } from "../../../Entities/Factura";

export async function getAllFactura() {

    const factura = await Factura.find({
        relations: {
            factura_detalle: {
                book: true
            }
        }
    })

    return factura
}