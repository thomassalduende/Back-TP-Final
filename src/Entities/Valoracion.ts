import { Entity, BaseEntity, Column, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { Books } from "./Books";
import { Users } from "./Users";

@ObjectType()
@Entity()
export class Valoracion extends BaseEntity{

    @Field(type => ID)
    @PrimaryColumn()
    id_valoracion!: number;

    @Field(type => Int)
    @Column()
    cantidad_estrellas!: number;

    @ManyToOne(() => Books, (books) => books.valoracion, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    books!: Books[];

    @ManyToOne(() => Users, (users) => users.valoracion, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'dni'})
    users!: Users;

}