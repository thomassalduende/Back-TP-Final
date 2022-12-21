
import { Entity ,BaseEntity, PrimaryColumn, Column, OneToOne, OneToMany} from "typeorm";
import { Editorial } from "./Editorial";
import { Genero } from "./Genero";
import { IdAutor } from "./IdAutor";
import { Oferta } from "./Oferta";
import { Valoracion } from "./Valoracion";

@Entity()
export class Books extends BaseEntity {
    @PrimaryColumn()
    isbn!: number;

    @Column()
    nombre!:string;

    @Column()
    precio!: number;

    @Column()
    stock!:number;

    @Column()
    stock_min!:number;

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

    @OneToMany(() => Genero, (genero) => genero.books)
    genero: Genero;

    @OneToOne(() => Valoracion, (valoracion) => valoracion.books)
    valoracion: Valoracion;

    @OneToOne(() => Oferta, (oferta) => oferta.books)
    oferta: Oferta;

    @OneToOne(() => Editorial, (editorial) => editorial.books)
    editorial: Editorial;

    @OneToMany(() => IdAutor, (id_autor) => id_autor.books)
    id_autor: IdAutor[];
}