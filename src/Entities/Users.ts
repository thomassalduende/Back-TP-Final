import { Entity ,BaseEntity, PrimaryColumn, Column, JoinColumn, OneToOne, OneToMany} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Carrito } from "./Carrito";
import { Ciudad } from "./Ciudad";
import { Valoracion } from "./Valoracion";
import { Direccion } from "./Direccion_user";
import { Opiniones } from "./Opinion_user";
import { Notificacion } from "./NotificarUser";
import { Factura } from "./Factura";

@ObjectType()
@Entity()
export class Users extends BaseEntity{

    @Field(type => ID)
    @PrimaryColumn({type: 'bigint'})
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

    @OneToOne((type) => Valoracion, (valoracion) => valoracion.users, {
        onUpdate: 'CASCADE'
    })
    valoracion!: Valoracion;

    @OneToOne((type) => Carrito, (carrito) => carrito.users, {
        onUpdate: 'CASCADE'
    })
    carrito!: Carrito;

    @Field(type => Direccion)
    @OneToOne((type) => Direccion, (direccion) => direccion.users, {
        onUpdate: 'CASCADE'
    })
    direccion: Direccion;

    @OneToMany((type) => Opiniones, (opinion) => opinion.users,{
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public opinion: Opiniones[];

    @Field(type => [Notificacion])
    @OneToMany((type) => Notificacion, (notificacion) => notificacion.users,{
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public notificacion: Notificacion[];

    @Field(type => [Factura])
    @OneToMany((type) => Factura, (factura) => factura.users,{
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public factura?: Factura[];


}

