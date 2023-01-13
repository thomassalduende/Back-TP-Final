import { Entity, BaseEntity, Column, PrimaryColumn, JoinColumn, ManyToMany} from "typeorm";
import { Field, Int, ObjectType, } from "type-graphql";
import { Books } from "./Books";


@ObjectType()
@Entity()
export class Autor extends BaseEntity {

    @Field(type => Int, {nullable:true})
    @PrimaryColumn({unique: true})
    id_autor!: number;

    @Field()
    @Column()
    nombre!: string;

    @ManyToMany((type) => Books)
    @Field(type => [Books], {nullable: true})
    @JoinColumn({name: 'isbn'})
    book!: Books[];
}