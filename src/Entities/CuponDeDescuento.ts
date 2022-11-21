import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class CuponDeDescuento extends BaseEntity{

    @Column()
    codigo: number; 

    @Column()
    direccion: string;

    @Column()
    nro_pedido:number;

    @Column()
    cod_postal: number;
}