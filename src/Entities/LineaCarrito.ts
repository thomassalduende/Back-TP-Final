import { Entity, BaseEntity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Carrito } from "./Carrito";
import { Books } from "./Books";

@ObjectType()
@Entity()
export class LineaCarrito extends BaseEntity{

    @Field(type => ID)
    @PrimaryColumn()
    id_venta!: number;

    @Field()
    @Column()
    cantidad!: number;

    @Field(type => Carrito)
    @Column()
    @ManyToOne(() => Carrito, (id_carrito) => id_carrito.carrito, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_carrito'})
    id_carrito: Carrito;

    @Field(type => Books)
    @Column()
    @OneToMany(() => Books, (isbn) => isbn.books,{
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    isbn!: Books[]
    
}