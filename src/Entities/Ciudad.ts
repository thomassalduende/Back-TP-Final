import { Entity, BaseEntity, Column, OneToMany, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID} from "type-graphql";
import { Users } from "./Users";
import { Provincia } from "./Provincia";

@ObjectType()
@Entity()
export class Ciudad extends BaseEntity{

    @Field(type => ID)
    @PrimaryColumn()
    cod_postal!: number;

    @Field()
    @Column()
    nombre!: string;

    @OneToMany(() => Users, (users)=> users.ciudad)
    users: Users[];

    @Field(type => Provincia, {nullable: true}) 
    @ManyToOne(() => Provincia, (provincia) => provincia.ciudad, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_provincia'})
    provincia!: Provincia;
    
    
   
    
}