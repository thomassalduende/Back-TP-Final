import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Books } from "./Books";

@ObjectType()
@Entity()
export class Editorial extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_editorial!: number;

    @Field()
    @Column({unique: true})
    nombre!: string;
}