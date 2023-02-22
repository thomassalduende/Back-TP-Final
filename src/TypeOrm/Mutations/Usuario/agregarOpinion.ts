import { Users } from "../../../Entities/Users";
import { Opiniones } from "../../../Entities/Opinion_user";
import { Books } from "../../../Entities/Books";


export async function agregarOpinion(coment: string, isbn: string, dni: number) {

    const opinion = new Opiniones()

    const user = await Users.find({
        where:{
            dni: dni
        }
    });

    const book = await Books.find({
        where:{
            isbn: isbn
        }
    });

    opinion.nombre_user = dni.toString();
    opinion.opinion = coment;
    opinion.users = user[0];
    opinion.book = book[0];

    await opinion.save();
}