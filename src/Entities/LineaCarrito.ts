import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class LineaCarrito extends BaseEntity{

    @Column()
    id_venta: number;

    @Column()
    cantidad: number;
}