import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Editorial extends BaseEntity{

    @PrimaryColumn()
    id_editorial: number;

    @Column()
    nombre: string;
}