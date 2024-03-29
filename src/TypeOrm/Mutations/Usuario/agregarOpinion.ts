import { Users } from "../../../Entities/Users";
import { Opiniones } from "../../../Entities/Opinion_user";
import { Books } from "../../../Entities/Books";


export async function agregarOpinion(coment: string, isbn: string, id: number) {

    const opinion = new Opiniones()

    const user = await Users.find({
        where:{
            id: id
        }
    });

    const book = await Books.find({
        where:{
            isbn: isbn
        }
    });
    

    opinion.nombre_user = user[0].nombre;
    opinion.opinion = coment;
    opinion.user_book = user[0].id.toString() + isbn;
    opinion.users = user[0];
    opinion.book = book[0];

    await opinion.save();
}