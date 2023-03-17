import { Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Provincia extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_provincia!: number;

    @Field()
    @Column()
    nombre!: string;
}