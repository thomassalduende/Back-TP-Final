import { Factura } from "../../../Entities/Factura";

export async function getFacturaID(id: number) {

    const factura = await Factura.find({
        relations: {
            factura_detalle: {
                book: true
            }
        },
        where: {
            id: id
        }
    })

    return factura
}