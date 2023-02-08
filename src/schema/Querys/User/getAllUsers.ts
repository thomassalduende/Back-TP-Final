// query que obtiene todos los usuarios
import { measureMemory } from "vm";
import { getAllUsuarios } from "../../../TypeOrm/Querys/Usuario/getAllUsuarios";
import { SendUser } from "../../../TypesDefs/SendUsers";

export async function GetAllUsers():Promise<SendUser> {

    const message = new SendUser()

    try{
        const users = await getAllUsuarios()

        message.message = 'Users obtenidos'
        message.success = true;
        message.users = users;

        return message;
    }catch(error: any){
        
        message.message = error;
        message.success = false

        return message;
    }
    
}