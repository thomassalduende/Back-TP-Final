import { Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class LineaFactura extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_linea_factura: number;

    @Column()
    isbn: number;

    @Column()
    cantidad: number;

    @Column()
    precio_unitario: number;
}