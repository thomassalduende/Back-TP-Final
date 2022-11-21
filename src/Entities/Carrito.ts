import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Carrito extends BaseEntity{

    @Column()
    id_carrito: number;

    @Column()
    id_usuario: number;
}