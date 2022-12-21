import { Entity, BaseEntity, PrimaryColumn, ManyToMany, JoinColumn, ManyToOne } from "typeorm";
import { Autor } from "./Autor";
import { Books } from "./Books";

@Entity()
export class IdAutor extends BaseEntity{

    @PrimaryColumn()
    id_autor: number;

    @PrimaryColumn()
    isbn: number;

    @ManyToMany(type => Autor, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'dni_autor'})
    dni_autor: Autor[]

    @ManyToMany(type => Books, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'isbn'})
    isbn_book: Books[]

    @ManyToOne(() => Autor, (autor) => autor.id_autor)
    autor: Autor;

    @ManyToOne(() => Books, (books) => books.id_autor)
    books: Books;
}