import { Books } from "../../../Entities/Books";
import { Factura } from "../../../Entities/Factura";
import { Factura_detalle } from "../../../Entities/Factura_detalllada";


export async function getLibrosComprados(id: number){

    const book = await Books.find({
        relations: {
            editorial: true,
            genero: true,
            autor: true,
            factura_detalle: {
                factura: {
                    users: true,
                    book: true
                }
            }
        },
        where: {
            factura_detalle: {
                factura: {
                    users: {
                        id: id
                    }
                }
            }
        }
    })

    return book;
}
