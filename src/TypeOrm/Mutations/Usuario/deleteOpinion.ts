import { Users } from "../../../Entities/Users";

export async function deleteOpinion(dni: number, isbn: string) {


    const user = await Users.find({
        relations:{
            opinion: true
        },
        where: {
            dni: dni
        }
    });

    if(user[0].opinion){
        const pos = user[0].opinion.findIndex(obj => obj.book.isbn === isbn);
        user[0].opinion.splice(pos, 1);
        
        await user[0].save();
    }
    
}