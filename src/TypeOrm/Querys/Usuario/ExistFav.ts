import { Favoritos } from "../../../Entities/Favoritos_user";
import { Users } from "../../../Entities/Users";


export async function ExistFav(id: number, isbn: string){

    const favorito = await Favoritos.find({

        where: {
            users: {
                id: id,
            },
            books: {
                isbn: isbn
            }
        }
    })

    return favorito[0] ? true : false;

}