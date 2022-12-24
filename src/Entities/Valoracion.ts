import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { Books } from "./Books";
import { Users } from "./Users";

@ObjectType()
@Entity()
export class Valoracion extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_valoracion!: number;

    @Field(type => Int)
    @Column()
    isbn!: number;

    @Field(type => Int)
    @Column()
    cantidad_estrellas!: number;

    @Field(type => Int)
    @Column()
    dni!: number;

    @OneToMany(() => Books, (books) => books.valoracion, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    books!: Books[];

    @OneToMany(() => Users, (users) => users.valoracion, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'dni'})
    users!: Users[];

}