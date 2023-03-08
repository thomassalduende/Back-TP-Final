import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Generated, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, Int} from "type-graphql";
import { Ciudad } from "./Ciudad";
import { Users } from "./Users";

@ObjectType()
@Entity()
export class Envio extends BaseEntity{

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    nombre: string;

    @Field()
    @Column()
    apellido: string;

    @Field()
    @Column()
    direccion!: string;

    @Field()
    @Column()
    AgregarInfo!: string;

    @Field(type => Int)
    @Column()
    telefono!: number;

    @OneToOne((type) => Users, (user) => user.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_user'})
    users!: Users;

    @Field(type => Ciudad)
    @ManyToOne((type) => Ciudad, (ciudad) => ciudad.cod_postal, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'cod_postal'})
    ciudad!: Ciudad;

}