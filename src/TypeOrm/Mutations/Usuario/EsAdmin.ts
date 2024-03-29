import { Users } from "../../../Entities/Users";


export async function EsAdmin(id: number) {

    const user = await Users.find({
        where: {
            id: id,
            es_admin: true
        }
    })

    return user[0] ? true : false;
}