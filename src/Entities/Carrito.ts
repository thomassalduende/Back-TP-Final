import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Carrito extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_carrito: number;

    @Column()
    dni: number;

    @OneToOne(() => Users, (users) => users.carrito)
    users: Users;
}