import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class Cuidad extends BaseEntity{
    
    @Column()
    cod_postal: number;

    @Column()
    nombre: string;
}