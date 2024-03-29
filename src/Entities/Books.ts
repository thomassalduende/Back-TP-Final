
import { Entity ,BaseEntity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { ObjectType, Int, ID, Field, Float } from "type-graphql";
import { Editorial } from "./Editorial";
import { Genero } from "./Genero";
import { Autor } from "./Autor";
import { Valoracion } from "./Valoracion";
import { Opiniones } from "./Opinion_user"
import { Factura_detalle } from "./Factura_detalllada";

@ObjectType()
@Entity()
export class Books extends BaseEntity {
    
    @Field({nullable: false})
    @PrimaryColumn({nullable: false})
    isbn!: string;

    @Field({nullable: false})
    @Column('text', {nullable: false})
    url_imagen!: string;

    @Field({nullable: false})
    @Column({nullable: false})
    nombre!:string;

    @Field(type => Float, {nullable: false})
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    precio!: number;

    @Field(type => Int, {nullable: false})
    @Column({nullable: false})
    stock!:number;

    @Field(type => String, {nullable: false})
    @Column({nullable: false})
    descripcion!: string;

    @Field(type => String, {nullable: true})
    @Column({nullable: true})
    fecha_ingreso: string;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
    })
    descuento!: number;

    // @Field(type => Genero)
    // @OneToMany(() => Genero, (genero) => genero.id_genero, {
    //     onUpdate: 'CASCADE',
    //     onDelete: 'RESTRICT'
    // })
    // @JoinColumn({name: 'id_genero'})
    // genero!: Genero[];

    @Field(type => [Genero], {nullable: false})
    @ManyToMany((type) => Genero, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinTable({
        name: "genero_book",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_genero'
        }
    })
    genero!: Genero[];

    @Field(type => [Autor], {nullable: false})
    @ManyToMany((type) => Autor, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinTable({
        name: "autor_book",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_autor',
        }
    })
    @JoinColumn({
        name: 'id_autor',
    })
    autor!: Autor[];

    @Field(type => [Valoracion], {nullable: false})
    @OneToMany(() => Valoracion, (valoracion) => valoracion.books, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public valoracion!: Valoracion[];

    
    @Field(type => Editorial, {nullable: false})
    @ManyToOne(() => Editorial, (editorial) => editorial.id_editorial, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_editoral'})
    editorial!: Editorial;

    // @ManyToMany((type) => Autor, (autor) => autor.id_autor,{
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'
    // })
    // @Field(type => [Autor], {nullable: true})
    // @JoinColumn({name: 'id_autor'})
    // autor!: Autor[];

    
    @OneToMany((type) => Factura_detalle, (factura_detalle) => factura_detalle.book, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public factura_detalle: Factura_detalle[];

    @Field(type => [Opiniones], {nullable: false})
    @OneToMany((type) => Opiniones, (opiniones) => opiniones.book, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public opiniones: Opiniones[];
}