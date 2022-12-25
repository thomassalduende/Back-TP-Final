import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from "typeorm";
import { ObjectType, Field, ID, Float } from "type-graphql";
import { Factura } from "./Factura";
import { type } from "os";

@ObjectType()
@Entity()
export class CuponDeDescuento extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn()
    codigo!: number; 

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
    })
    cantidad_descuento!: number;

    @Field(type => Factura)
    @Column()
    @OneToMany(() => Factura, (id_factura) => id_factura.cupon, {
        onUpdate: 'CASCADE'
    })
    @JoinTable({name: 'id_factura'})
    id_factura!: Factura[];

}