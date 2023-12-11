import { Resolver, Query, Mutation, Args, Arg } from "type-graphql";
import { SendGeneros } from "../../../TypesDefs/SendGeneros";
import { Send } from "../../../TypesDefs/Send";
import { ArgsInsertGenero, ArgsUpdateGenero } from "../../ArgsDefs/argsDefsGenero";
import { InsertGenero } from "../../Mutations/Genero/insertGenero";
import { UpdateGenero } from "../../Mutations/Genero/updateGenero";
import { DeleteGenero } from "../../Mutations/Genero/deleteGenero";
import { getGeneros } from "../../Querys/Genero/getGeneros";
import { SendGenero } from "../../../TypesDefs/SendGenero";
import { GetGeneroId } from "../../Querys/Genero/getGeneroId";


@Resolver()
export class GeneroResolver {

    @Mutation(() => Send)
    async insertGenero(@Args() { nombre, url_imagen }: ArgsInsertGenero) {

        return await InsertGenero(nombre, url_imagen)
    }

    @Mutation(() => Send)
    async updateGenero(@Args() { nombre_orig, nombre, url_imagen }: ArgsUpdateGenero) {

        return await UpdateGenero(nombre_orig, nombre, url_imagen)
    }

    @Mutation(() => Send)
    async deleteGenero(@Arg('nombre') nombre: string) {

        return await DeleteGenero(nombre)
    }

    @Query(() => SendGeneros)
    async getGeneros() {

        return await getGeneros()
    }

    @Query(() => SendGenero)
    async getGeneroId(@Arg('id') id: string) {
        return await GetGeneroId(id)
    }
}
