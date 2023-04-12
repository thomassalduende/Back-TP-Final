import { Send } from "./Send";
import { Users } from "../Entities/Users";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SendUsers extends Send {

    @Field(type => [Users])
    users: Users[]
}