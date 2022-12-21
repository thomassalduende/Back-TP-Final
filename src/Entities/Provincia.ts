import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Ciudad } from "./Ciudad";

@Entity()
export class Provincia extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_provicia: number;

    @Column()
    nombre!: string;

    @OneToOne(() => Ciudad, (ciudad) => ciudad.provincia)
    ciudad: Ciudad;
}