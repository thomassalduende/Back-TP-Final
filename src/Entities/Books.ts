
import { Entity ,BaseEntity, PrimaryColumn, Column, OneToOne, OneToMany, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { ObjectType, Int, ID, Field, Float } from "type-graphql";
import { Editorial } from "./Editorial";
import { Genero } from "./Genero";
import { Autor } from "./Autor";
import { Valoracion } from "./Valoracion";
import { LineaCarrito } from "./LineaCarrito";
import { Factura } from "./Factura";
import { Opiniones } from "./Opinion_user"

@ObjectType()
@Entity()
export class Books extends BaseEntity {
    @Field(type => ID, {nullable: true})
    @PrimaryColumn()
    isbn!: string;

    @Field({nullable: true})
    @Column('text')
    url_imagen!: string;

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

    @Field(type => String)
    @Column()
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


    @Field(type => Genero)
    @OneToMany(() => Genero, (genero) => genero.books, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'id_genero'})
    genero!: Genero[];

    @OneToOne(() => Valoracion, (valoracion) => valoracion.books)
    valoracion!: Valoracion;

    
    @Field(type => Editorial, {nullable: true})
    @OneToOne(() => Editorial, (editorial) => editorial.books, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name: 'id_editoral'})
    editorial!: Editorial;

    @ManyToMany((type) => Autor)
    @Field(type => [Autor], {nullable: true})
    @JoinColumn({name: 'id_autor'})
    autor!: Autor[];

    @ManyToMany(() => LineaCarrito)
    @JoinTable()
    books!: Books[];

    @OneToMany((type) => Factura, (factura) => factura.book, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public factura: Factura[];

    @Field(type => [Opiniones])
    @OneToMany((type) => Opiniones, (opiniones) => opiniones.book, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public opiniones: Opiniones[];
}