import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Factura extends BaseEntity{

    @Column()
    id_cliente: number;

    @Column()
    fecha: string;

    @Column()
    monto: number;

    @Column()
    modo_pago: string;
}