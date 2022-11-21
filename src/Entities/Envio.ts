import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Envio extends BaseEntity{

    @Column()
    id_envio: number;

    @Column()
    direccion: string;

    @Column()
    nro_pedido: number;

    @Column()
    cod_postal: number;
}