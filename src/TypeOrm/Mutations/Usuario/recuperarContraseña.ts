import { Users } from "../../../Entities/Users";
import { message } from "../../../ControlerMail/message";
import { sendMail } from "../../../ControlerMail/sendMail";

export async function recuperarContraseña(id: number) {


    const user = await Users.find({
        relations: {
            carrito: true
        },
        where: {
            id: id
        }
    }) 

    let mensaje = message(user[0].email, "", "", "")
    let subject: string;
    let messageText: string;
    


    
}