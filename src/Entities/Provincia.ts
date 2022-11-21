import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Provincia extends BaseEntity{

    @Column()
    id_provicia: number;

    @Column()
    nombre: string;
}