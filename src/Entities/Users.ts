import { Entity ,BaseEntity, PrimaryColumn, Column, JoinColumn, OneToOne, OneToMany} from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { Carrito } from "./Carrito";
import { Ciudad } from "./Ciudad";
import { Valoracion } from "./Valoracion";

@ObjectType()
@Entity()
export class Users extends BaseEntity{

    @Field(type => ID)
    @PrimaryColumn()
    dni!:number;

    @Field()
    @Column()
    nombre!: string;

    @Field()
    @Column()
    apellido!: string;

    @Field()
    @Column({unique: true})
    email!: string;

    @Field(type => Int)
    @Column()
    telefono!: number;

    @Field()
    @Column()
    direccion!: string;

    @Field()
    @Column()
    password!: string;

    @Field()
    @Column({default: false})
    es_admin!:boolean;


    @OneToMany(() => Ciudad, (ciudad)=> ciudad.users, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn({name:'cod_postal'})
    ciudad!: Ciudad;

    @OneToOne((type) => Valoracion, (valoracion) => valoracion.users)
    valoracion!: Valoracion;

    @OneToOne((type) => Carrito, (carrito) => carrito.users)
    carrito!: Carrito;
}

