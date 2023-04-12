import { Users } from "../../../Entities/Users";
import { ILike } from "typeorm";


export async function existEmail(email: string) {

    const user = await Users.find({
        where: {
            email: ILike(`${email}`)
        }
    })
    
    return user[0]? true : false;
}