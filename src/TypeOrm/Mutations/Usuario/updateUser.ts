import { Users } from "../../../Entities/Users";

export async function updateUser(id: number, password: string) {

    const user = await Users.find({
        where: {
            id: id
        }
    })
    user[0].password = password;

    await user[0].save()
    
}