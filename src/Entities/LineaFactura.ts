import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class LineaFactura extends BaseEntity{

    @Column()
    isbn: number;

    @Column()
    cantidad: number;

    @Column()
    precio_unitario: number;
}