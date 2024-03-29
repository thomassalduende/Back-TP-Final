import { Field, ObjectType } from "type-graphql";
import { Genero } from "../Entities/Genero";
import { Send } from "./Send";

@ObjectType()
export class SendGenero extends Send {

    @Field(type => Genero)
    genero: Genero
}