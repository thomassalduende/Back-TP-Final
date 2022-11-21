import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Editorial extends BaseEntity{

    @Column()
    id_editorial: number;

    @Column()
    nombre: string;
}