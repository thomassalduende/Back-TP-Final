import { Users } from "../../../Entities/Users";

export async function getUsersAdmin() {

    const users = await Users.find({
        where: {
            es_admin: true
        }
    })

    console.log(users)

    return users;
}