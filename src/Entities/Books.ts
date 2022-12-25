
import { Entity ,BaseEntity, PrimaryColumn, Column, OneToOne, OneToMany, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { ObjectType, Int, ID, Field, Float } from "type-graphql";
import { Editorial } from "./Editorial";
import { Genero } from "./Genero";
import { IdAutor } from "./IdAutor";
import { Oferta } from "./Oferta";
import { Valoracion } from "./Valoracion";
import { off } from "process";
import { LineaCarrito } from "./LineaCarrito";

@ObjectType()
@Entity()
export class Books extends BaseEntity {
    @Field(type => ID, {nullable: true})
    @PrimaryColumn()
    isbn!: number;

    @Field({nullable: true})
    @Column()
    nombre!:string;

    @Field(type => Float, {nullable: true})
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    precio!: number;

    @Field(type => Int, {nullable: true})
    @Column()
    stock!:number;

    @Field(type => Int, {nullable: true})
    @Column()
    stock_min!:number;

    @Field(type => Genero, {nullable: true})
    @OneToMany(() => Genero, (genero) => genero.books, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'id_genero'})
    genero!: Genero;

    @OneToOne(() => Valoracion, (valoracion) => valoracion.books)
    valoracion!: Valoracion;

    @Field(type => Oferta, {nullable: true})
    @OneToOne(() => Oferta, (oferta) => oferta.books, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'id_oferta'})
    oferta!: Oferta;

    @Field(type => Editorial, {nullable: true})
    @OneToOne(() => Editorial, (editorial) => editorial.books, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'id_editoral'})
    editorial!: Editorial;

    @OneToMany(() => IdAutor, (id_autor) => id_autor.books)
    id_autor: IdAutor[];

    @ManyToMany(() => LineaCarrito)
    @JoinTable()
    books!: Books[];
}