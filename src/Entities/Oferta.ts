import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Oferta extends BaseEntity{

    @PrimaryColumn()
    fecha: string;

    @Column()
    descuento: number;
}