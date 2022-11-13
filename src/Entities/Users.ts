
import { Entity ,BaseEntity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Users extends BaseEntity{
    @PrimaryColumn()
    dni:number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    telefono: number;

    @Column()
    direccion: string;

    @Column()
    password: string;

    @Column()
    es_admin:boolean;
}

