import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Oferta extends BaseEntity{

    @Column()
    fecha: string;

    @Column()
    descuento: number;
}