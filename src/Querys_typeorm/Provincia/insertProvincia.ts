import { Provincia } from "../../Entities/Provincia";
import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function insertProvincia(nombreProvincia: string) {

    const existeProv = await existsNombre(nombreProvincia, Provincia)

    if (!existeProv){

        const provincia = new Provincia();
        provincia.nombre = nombreProvincia;
        await provincia.save()

    }
    return getElementByNombre(nombreProvincia, Provincia)
}