import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany, JoinColumn, ManyToMany } from "typeorm";
import { IdAutor } from "./IdAutor";

@Entity()
export class Autor extends BaseEntity {
    @PrimaryColumn({unique: true})
    dni_autor!: number;

    @Column()
    nombre!: string;
    
    @Column()
    apellido!: string;

    @OneToMany(() => IdAutor, (id_autor) => id_autor.autor)
    id_autor: IdAutor[];
}