import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { IdAutor } from "./IdAutor";

@ObjectType()
@Entity()
export class Autor extends BaseEntity {

    @Field(type => Int, {nullable:true})
    @PrimaryColumn({unique: true})
    dni_autor!: number;

    @Field({nullable: true})
    @Column()
    nombre!: string;

    @Field({nullable: true})
    @Column()
    apellido!: string;

    @OneToMany(() => IdAutor, (id_autor) => id_autor.autor)
    id_autor: IdAutor[];
}