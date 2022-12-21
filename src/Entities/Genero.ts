import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Books } from "./Books";

@Entity()
export class Genero extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_genero: number;

    @Column()
    nomber: number;

    @OneToOne(() => Books, (books) => books.genero)
    books: Books;
}