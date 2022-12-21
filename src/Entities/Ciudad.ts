import { Entity, BaseEntity, Column, OneToMany, PrimaryColumn, JoinColumn } from "typeorm";
import { Users } from "./Users";
import { Provincia } from "./Provincia";

@Entity()
export class Ciudad extends BaseEntity{
    
    @PrimaryColumn()
    cod_postal!: number;

    @Column()
    nombre!: string;

    @Column()
    id_provincia!: number;

    @OneToMany(() => Users, (users)=> users.ciudad)
    users: Users[];

    @OneToMany(() => Provincia, (provincia) => provincia.ciudad)
    provincia: Provincia[];
    
    @JoinColumn({name: 'id_provincia'})
    id_provicia: Ciudad
    
}