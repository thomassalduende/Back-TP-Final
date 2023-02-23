import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Ciudad } from "./Ciudad";

@ObjectType()
@Entity()
export class Provincia extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_provicia!: number;

    @Field()
    @Column()
    nombre!: string;
}