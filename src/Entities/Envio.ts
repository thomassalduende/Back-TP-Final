import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Generated, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, ID} from "type-graphql";
import { Carrito } from "./Carrito";
import { Ciudad } from "./Ciudad";

@ObjectType()
@Entity()
export class Envio extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_envio!: number;

    @Field()
    @Column()
    direccion!: string;

    @Field()
    @Column(Generated)
    nro_pedido!: number;

    @Field(type => Ciudad)
    @Column()
    @ManyToOne(() => Ciudad, (ciudad) => ciudad.cod_postal, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'cod_postal'})
    cod_postal!: Ciudad;

    @Field(type => Carrito)
    @Column()
    @OneToOne(() => Carrito, (carrito) => carrito.id_carrito, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_carrito'})
    id_carrito: Carrito;

}