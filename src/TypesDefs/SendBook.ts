import { ObjectType, Field, Float } from "type-graphql";
import { Send } from "./Send";
import { Books } from "../Entities/Books";

@ObjectType()
export class SendBook extends Send {

    @Field()
    page: number = 0

    @Field(type => Float)
    valoracion: number = 0

    @Field(type => [Books])
    book: Books[]
}