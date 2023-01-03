import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export class Autor extends BaseEntity {

    @Field(type => Int, {nullable:true})
    @PrimaryColumn({unique: true})
    dni_autor!: number;

    @Field()
    @Column()
    nombre!: string;

}