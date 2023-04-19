import { Field, ObjectType } from "type-graphql";
import { Send } from "./Send";

@ObjectType()
export class SendValoracion extends Send {

    @Field()
    id_user: number;
}