import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Genero extends BaseEntity{

    @Column()
    id_genero: number;

    @Column()
    nomber: number;
}