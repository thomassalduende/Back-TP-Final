import { Ciudad } from "../../Entities/Ciudad";

export async function getAllCiudad() {

    const ciudad = Ciudad.find()

    return ciudad;
}