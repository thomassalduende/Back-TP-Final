import { getUsersAdmin } from "../../../TypeOrm/Querys/Usuario/getUsersAdmin";
import { SendUsers } from "../../../TypesDefs/SendUsers";


export async function GetAdminUsers () {

    const message = new SendUsers()

    try {
        const users = await getUsersAdmin()

        message.message = 'Usuarios obtenidos';
        message.success = true;
        message.users = users;

        return message;
    }catch (err: any) {

        message.message = err;
        message.success = false;
    }
}