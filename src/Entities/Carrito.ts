import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, } from "type-graphql";
import { Users } from "./Users";
import { LineaCarrito } from "./LineaCarrito";

@ObjectType()
@Entity()
export class Carrito extends BaseEntity{

    @Field({nullable: true})
    @PrimaryGeneratedColumn()
    id_carrito!: number;

    @Field(type => Users, {nullable: true})
    @Column({unique: true})
    dni!: number;

    @OneToOne(() => Users, (users) => users.carrito,{
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'dni'})
    users: Users;

    @OneToOne(() => LineaCarrito, (carrito) => carrito.id_carrito,{
        onUpdate: 'CASCADE'
    })
    carrito!: LineaCarrito;
}