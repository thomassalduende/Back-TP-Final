import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID, Float, Int } from "type-graphql";
import { CuponDeDescuento } from "./CuponDeDescuento";
import { Envio } from "./Envio";
import { Users } from "./Users";
import { Books } from "./Books";
import { Factura_detalle } from "./Factura_detalllada";


@ObjectType()
@Entity()
export class Factura extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(type => String)
    @Column()
    fecha!: String;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 16, 
        scale: 2,
    })
    monto!: number;

    @Column({type: "varchar"})
    paymentID_MP!: string;

    @Field(type => CuponDeDescuento)
    @ManyToOne((type) => CuponDeDescuento, (cupon) => cupon.id_factura, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'cupon'})
    cupon!: CuponDeDescuento;

    @Field(type => Envio)
    @OneToOne((type) => Envio, (envio) => envio.cod_postal, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'cod_postal'})
    envio!: Envio;

    @ManyToOne((type) => Users, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'dni'})
    users!: Users;

    @Field(type => Books)
    @ManyToOne((type) => Books, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    book!: Books

    @Field(type => [Factura_detalle])
    @OneToMany((type) => Factura_detalle, (factura_detalle) => factura_detalle.factura, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    factura_detalle: Factura_detalle[]

}