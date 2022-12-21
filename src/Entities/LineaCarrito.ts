import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class LineaCarrito extends BaseEntity{

    @PrimaryColumn()
    id_venta: number;

    @Column()
    cantidad: number;
}