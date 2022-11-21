import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Valoracion extends BaseEntity{

    @Column()
    isbn: number;

    @Column()
    cantidad_estrellas: number;
}