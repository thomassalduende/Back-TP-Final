import { Users } from "../../../Entities/Users";


export async function deleteFavorito(id: number, isbn: string){


    const users = await Users.find({
        relations: {
            favoritos: {
                books: true
            }
        },
        where: {
            id: id
        }
    })

    if (users[0].favoritos){
        const pos = users[0].favoritos.findIndex(obj => obj.books.isbn === isbn);
        if (pos != -1){

            await users[0].favoritos[pos].remove();
        }
    }
}