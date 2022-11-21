import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Autor extends BaseEntity {
    @Column()
    id_autor: number;

    @Column()
    nombre: string;
    
    @Column()
    apellido: string;
}