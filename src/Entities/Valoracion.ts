import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Books } from "./Books";
import { Users } from "./Users";


@Entity()
export class Valoracion extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_valoracion: number;

    @Column()
    isbn!: number;

    @Column()
    cantidad_estrellas!: number;

    @OneToMany(() => Books, (books) => books.valoracion)
    books: Books[];

    @OneToMany(() => Users, (users) => users.valoracion)
    users: Users[];

}