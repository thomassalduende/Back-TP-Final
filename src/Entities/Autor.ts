import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Autor extends BaseEntity {
    @PrimaryColumn()
    dni_autor!: number;

    @Column()
    nombre!: string;
    
    @Column()
    apellido!: string;
}