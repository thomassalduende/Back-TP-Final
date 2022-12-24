import { Entity, BaseEntity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { Field, ObjectType, Float, ID } from "type-graphql";
import { Books } from "./Books";


@ObjectType()
@Entity()
export class Oferta extends BaseEntity{

    @Field(type => ID)
    @PrimaryColumn()
    fecha!: string;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
    })
    descuento!: number;

    @OneToOne(() => Books, (books) => books.oferta)
    books: Books;
}