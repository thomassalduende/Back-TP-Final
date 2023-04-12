import { Users } from "../../../Entities/Users";

export async function getUsersAdmin() {

    const users = await Users.find({
        relations: {
            direccion: {
                ciudad: {
                    provincia: true
                }
            }
        },
        where: {
            es_admin: true,
            direccion: true
        }
    })

    console.log(users)

    return users;
}