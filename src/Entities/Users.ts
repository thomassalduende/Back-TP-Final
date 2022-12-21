
import { Entity ,BaseEntity, PrimaryColumn, Column, JoinColumn, OneToOne, OneToMany} from "typeorm";
import { Carrito } from "./Carrito";
import { Ciudad } from "./Ciudad";
import { Valoracion } from "./Valoracion";


@Entity()
export class Users extends BaseEntity{
    @PrimaryColumn()
    dni!:number;

    @Column()
    nombre!: string;

    @Column()
    apellido!: string;

    @Column()
    email!: string;

    @Column()
    telefono!: number;

    @Column()
    direccion!: string;

    @Column()
    password!: string;

    @Column()
    es_admin!:boolean;

    @Column()
    cod_postal!: number;

    @OneToMany(() => Ciudad, (ciudad)=> ciudad.users, {
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    ciudad: Ciudad;
    
    // @JoinColumn({name:'cod_postal'})
    // ciudad : Ciudad;

    @OneToOne(() => Valoracion, (valoracion) => valoracion.users)
    valoracion: Valoracion;

    @OneToOne(() => Carrito, (carrito) => carrito.users)
    carrito: Carrito;
}

