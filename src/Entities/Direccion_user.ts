import { ObjectType, Field, Int} from "type-graphql";
import { Entity ,BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany, ManyToOne} from "typeorm";
import { Ciudad } from "./Ciudad";
import { Users } from "./Users";

@ObjectType()
@Entity()
export class Direccion extends BaseEntity{

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

    @OneToOne((type) => Users, (user) => user.dni, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'dni'})
    users!: Users;

    @Field(type => Ciudad)
    @ManyToOne((type) => Ciudad, (ciudad) => ciudad.cod_postal, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'cod_postal'})
    ciudad!: Ciudad;
}

