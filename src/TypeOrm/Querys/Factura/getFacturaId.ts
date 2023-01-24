import { Factura } from "../../../Entities/Factura";

export async function getFacturaID(id: number) {

    const factura = await Factura.find({
        relations: {
            book: true
        },
        where: {
            id_cliente: id
        }
    })

    return factura
}