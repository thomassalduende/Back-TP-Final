import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carrito extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_carrito: number;

    @Column()
    dni: number;
}