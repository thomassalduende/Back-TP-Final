import { Entity, BaseEntity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { Books } from "./Books";

@Entity()
export class Editorial extends BaseEntity{

    @PrimaryColumn()
    id_editorial: number;

    @Column()
    nombre: string;

    @OneToOne(() => Books, (books) => books.editorial)
    books: Books;
}