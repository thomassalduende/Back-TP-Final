import { CuponDeDescuento } from "../../../Entities/CuponDeDescuento";
import { ILike } from "typeorm";

export async function existsCupon(codigo: string) {

    const result = await CuponDeDescuento.find({
        where: {
            codigo: ILike(codigo)
        }
    })
    return result[0] ? true : false
}








