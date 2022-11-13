
import { Entity ,BaseEntity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Books extends BaseEntity {
    @PrimaryColumn()
    isbn: number;

    @Column()
    nombre:string;

    @Column()
    precio: number;

    @Column()
    stock:number;

    @Column()
    stock_min:number;

    @Column()
    id_valoracion:number;

    @Column()
    id_genero:string;

    @Column()
    id_oferta:number;

    @Column()
    dni_autor:number;

    @Column()
    id_editorial:number;

    @Column()
    id_linea_carrito:number;
}