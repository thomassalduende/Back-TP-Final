import { Resolver, Args, Arg, Query, Mutation } from "type-graphql";
import { ArgsLogin, IniciarSesion, ArgsInsertCupon, ArgsInsertDireccion, ArgsOpinion, ArgsValorar, ArgsUpdateUser } from "../../ArgsDefs/argsDefsUser";
import { SendUser } from "../../../TypesDefs/SendUser";
import { Send } from "../../../TypesDefs/Send";

import {}




@Resolver()
export class UserResolver {

    @Mutation(() => SendUser)
    async iniciarSesion(@Args() {nombre, apellido, email, password})
}