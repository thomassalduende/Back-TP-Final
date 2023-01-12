import { ObjectType, Field,  } from "type-graphql";
import { Users } from "../Entities/Users";
import { Send } from "./Send";

@ObjectType()
export class SendUser extends Send {

    @Field(type => [Users])
    users: Users[] = []
}