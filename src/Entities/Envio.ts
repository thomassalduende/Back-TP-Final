import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Envio extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_envio: number;

    @Column()
    direccion!: string;

    @Column()
    nro_pedido!: number;

    @Column()
    cod_postal!: number;

    @Column()
    id_carrito: number;

}