import { Ciudad } from "../../../Entities/Ciudad"; 
import { Provincia } from "../../../Entities/Provincia";
import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function insertCiudad(nombreCiudad: string, nombreProv: string) {

    const existeProv = await existsNombre(nombreProv, Provincia)

    if (!existeProv)
        throw `ERROR, NO EXISTE LA PROVINCIA ${nombreProv}`

    const provincia = await getElementByNombre(nombreProv, Provincia)
    
    const ciudad = new Ciudad()
    ciudad.nombre = nombreCiudad;
    ciudad.provincia = provincia;

    await ciudad.save()
    
}