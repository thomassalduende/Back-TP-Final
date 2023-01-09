import { Books } from "../../Entities/Books";
import { Users } from "../../Entities/Users";

export async function getAllUsuarios() {

    const usuario = await Books.find()

    return usuario;
    
}