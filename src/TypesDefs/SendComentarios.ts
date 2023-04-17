import { Field, ObjectType } from "type-graphql";
import { Send } from "./Send";

@ObjectType()
export class SendComentarios extends Send {
    @Field()
    comentario: boolean;

    @Field()
    comprado: boolean;
}