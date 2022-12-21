import { Entity, BaseEntity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { Books } from "./Books";

@Entity()
export class Oferta extends BaseEntity{

    @PrimaryColumn()
    fecha: string;

    @Column()
    descuento: number;

    @OneToOne(() => Books, (books) => books.oferta)
    books: Books;
}