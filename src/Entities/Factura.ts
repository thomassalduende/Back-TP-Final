import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, ID, Float } from "type-graphql";
import { CuponDeDescuento } from "./CuponDeDescuento";
import { Envio } from "./Envio";
import { Users } from "./Users";

@ObjectType()
@Entity()
export class Factura extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_cliente!: number;

    @Field(type => String)
    @Column()
    fecha!: string;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 16, 
        scale: 2,
    })
    monto!: number;

    @Field()
    @Column({type: 'varchar'})
    modo_pago: string;

    @OneToOne((type) => CuponDeDescuento, (cupon) => cupon.id_factura, {
        onUpdate: 'CASCADE'
    })
    cupon!: CuponDeDescuento;

    @OneToOne((type) => Envio, (envio) => envio.cod_postal, {
        onUpdate: 'CASCADE'
    })
    envio!: Envio;

    @ManyToOne((type) => Users, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'dni'})
    users!: Users;
}