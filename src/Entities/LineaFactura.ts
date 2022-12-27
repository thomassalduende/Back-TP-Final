import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { ObjectType, Field, ID, Float, Int } from "type-graphql";
import { LineaCarrito } from "./LineaCarrito";
import { Carrito } from "./Carrito";

@ObjectType()
@Entity()
export class LineaFactura extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_linea_factura!: number;

    @Field(type => Int)
    @Column()
    cantidad!: number;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    precio_unitario!: number;

    @Field(type => [LineaCarrito])
    @OneToOne((type) => LineaCarrito, (isbn) => isbn.isbn, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    isbn!: LineaCarrito;

    @Field(type => [LineaCarrito])
    @OneToMany((type) => LineaCarrito, (linea_carrito) =>linea_carrito.id_carrito, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_carrito'})
    linea_carrito!: LineaCarrito[];
    
}