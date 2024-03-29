import { Entity, BaseEntity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
    cantidad_estrellas!: number;

    @Field()
    @Column()
    user_book: string;

    @ManyToOne(() => Books, (books) => books.isbn, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    books!: Books;

    @ManyToOne(() => Users, (users) => users.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_user'})
    users!: Users;

}