import { Users } from "../../../Entities/Users";

export async function deleteOpinion(id: number, isbn: string) {


    const user = await Users.find({
        relations:{
            opinion: {
                book: true
            }
        },
        where: {
            id: id
        }
    });


    console.log(user[0].opinion)
    if(user[0].opinion){

        const pos = user[0].opinion.findIndex(obj => obj.book.isbn === isbn);
        if(pos !== -1){
            await user[0].opinion[pos].remove();
            user[0].opinion.splice(pos, 1);
            await user[0].save()
        }else{
            throw new Error('No existe el comentario')
        }
    }
}