import { ObjectType, Field, Float } from "type-graphql";
import { Send } from "./Send";
import { Books } from "../Entities/Books";
import { Factura_detalle } from "../Entities/Factura_detalllada";

@ObjectType()
export class SendComprados extends Send {

    @Field(type => [Books])
    book: Books[];
}