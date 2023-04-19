import { Users } from "../../../Entities/Users";

export async function deleteValoracion(id: number, isbn: string) {


    const user = await Users.find({
        relations:{
            valoracion: true
        },
        where: {
            id: id
        }
    });

    if(user[0].valoracion){
        const pos = user[0].valoracion.findIndex(obj => obj.books.isbn === isbn);
        user[0].valoracion.splice(pos, 1);
        
        await user[0].save();
    }
    
}