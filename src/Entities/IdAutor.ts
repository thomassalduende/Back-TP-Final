import { Field, ObjectType } from "type-graphql";
import { Entity, BaseEntity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Autor } from "./Autor";
import { Books } from "./Books";

@ObjectType()
@Entity()
export class IdAutor extends BaseEntity{

    @Field()
    @PrimaryColumn()
    dni_autor!: number;

    @Field()
    @PrimaryColumn()
    isbn!: number;

    @Field(type => Autor)
    @ManyToOne((type) => Autor, (autor) => autor.dni_autor, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'dni_autor'})
    autor!: Autor;

    @Field(type => Books)
    @ManyToOne((type) => Books, (books) => books.isbn, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
   })
    @JoinColumn({name: 'isbn'})
    books!: Books;
}