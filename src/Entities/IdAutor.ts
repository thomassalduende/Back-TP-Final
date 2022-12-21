import { Entity, BaseEntity, PrimaryColumn } from "typeorm";

@Entity()
export class IdAutor extends BaseEntity{

    @PrimaryColumn()
    id_autor: number;

    @PrimaryColumn()
    isbn: number;
}