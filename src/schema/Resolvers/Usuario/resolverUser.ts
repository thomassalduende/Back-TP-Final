import { Resolver, Args, Arg, Query, Mutation } from "type-graphql";
import { ArgsRegistrarse, ArgsAgregarItem, ArgsDeleteItem, ArgsLogin, IniciarSesion, ArgsAgregarCupon, ArgsAgregarDireccion, ArgsValorar, ArgsUpdateUser, ArgsGetUser, ArgsAgregarFav, ArgsAgregarValoracion, ArgsComentario, ArgsDeleteComentario } from "../../ArgsDefs/argsDefsUser";
import { SendUser } from "../../../TypesDefs/SendUser";
import { Send } from "../../../TypesDefs/Send";

import { registrarse } from "../../Mutations/User/registrarse";
import { userAdmin } from "../../Mutations/User/userAdmin";
import { DeleteUser } from "../../Mutations/User/DeleteUser";
import { agregarItem } from "../../Mutations/User/agregarItem";
import { DeleteItem } from "../../Mutations/User/DeleteItem";
import { QuitarItem } from "../../Mutations/User/QuitarItem";
import { AgregarDireccion } from "../../Mutations/User/AgregarDireccion";
import { SendCupones } from "../../../TypesDefs/SendCupones";
import { AgregarCupon } from "../../Mutations/User/AgregarCupon";
import { SendMercadoPago } from "../../../TypesDefs/SendMercadoPago";
import { RealizarCompra } from "../../Mutations/User/RealizarCompra";
import { UpdateUser } from "../../Mutations/User/updateUser";
import { getLoginUser } from "../../Querys/User/getLoginUser";
import { GetUsers } from "../../Querys/User/getUsers";
import { AgregarOpinion } from "../../Mutations/User/agregarOpinion";
import { DeleteOpinion } from "../../Mutations/User/deleteOpinion";
import { SendUsers } from "../../../TypesDefs/SendUsers";
import { AgregarFav } from "../../Mutations/User/agregarFavoritoUser";
import { DeleteFavorito } from "../../Mutations/User/deleteFavoritoUser";
import { SendFavoritos } from "../../../TypesDefs/SendFavoritos";
import { GetFavoritos } from "../../Querys/User/getFavoritos";
import { existFav } from "../../Querys/User/existFav";
import { GetAdminUsers } from "../../Querys/User/GetUsersAdmin";
import { esAdmin } from "../../Mutations/User/esAdmin";
import { SendComentarios } from "../../../TypesDefs/SendComentarios";
import { ArgsComprado, ArgsValorado } from "../../ArgsDefs/argsDefsBook";
import { existComentario } from "../../Mutations/User/existComentario";
import { AgregarValoracion } from "../../Mutations/User/AgregarValoracion";
import { DeleteValoracion } from "../../Mutations/User/DeleteValoracion";
import { SendValoracion } from "../../../TypesDefs/SendValoracion";
import { ExistValoracion } from "../../Mutations/User/ExistValoracion";
import { SendComprados } from "../../../TypesDefs/SendComprados";
import { GetLibrosComprados } from "../../Querys/User/GetLibrosComprados";
import { ResetPassword } from "../../Mutations/User/ResetPassword";
import { loginGoogle } from "../../Querys/User/loginGoogle";





@Resolver()
export class UserResolver {

    @Mutation(() => SendUser)
    async registrarse(@Args() {nombre, email, password}: ArgsRegistrarse){

        return await registrarse(nombre, email, password)
    }

    @Mutation(() => SendUser)
    async UserAdminRegister(@Args() {nombre, email, password}: ArgsRegistrarse){

        return await userAdmin(nombre, email, password)
    }

    @Mutation(() => Send)
    async updateUser(@Args() {password, tokenUser} : ArgsUpdateUser){

        return await UpdateUser(tokenUser, password)
    }

    @Mutation(() => Send)
    async deleteUsuario(@Arg('email') email: string){

        return await DeleteUser(email)
    }

    @Mutation(() => Send)
    async AgregarItem(@Args() {isbn, cantidad, tokenUser}: ArgsAgregarItem){

        return await agregarItem(isbn, cantidad, tokenUser);
    }

    @Mutation(() => Send)
    async quitarItem(@Args() {isbn, cantidad, tokenUser}: ArgsAgregarItem){

        return await QuitarItem(isbn, cantidad, tokenUser)
    }

    @Mutation(() => Send)
    async deleteItem(@Args() {isbn, tokenUser}: ArgsDeleteItem){

        return await DeleteItem(isbn, tokenUser)
    }

    @Mutation(() => SendUser)
    async agregarDireccionUser(@Args() {tokenUser,nombre, dni, nombre_ciudad, nombre_prov,direccion, AgregarInfo, telefono, cod_postal }:ArgsAgregarDireccion){

        return await AgregarDireccion(tokenUser, nombre, dni, nombre_ciudad, nombre_prov, direccion, AgregarInfo, telefono, cod_postal)
    }

    
    @Mutation(() => SendCupones)
    async agregarCupon(@Args() {codigo, tokenUser}: ArgsAgregarCupon){

        return await AgregarCupon(codigo, tokenUser)
    }

    @Mutation(() => SendMercadoPago)
    async realizarCompra(@Arg('tokenUser') tokenUser: string){

        return await RealizarCompra(tokenUser)
    }

    @Mutation(() => Send)
    async agregarOpinion(@Args() {coment, isbn, tokenUser}: ArgsComentario){

        return await AgregarOpinion(coment, isbn, tokenUser)
    }

    @Mutation(() => Send)
    async deleteOpinion(@Args() {isbn, tokenUser}: ArgsDeleteComentario){

        return await DeleteOpinion(isbn, tokenUser)
    }

    @Mutation(() => Send)
    async agregarFavorito(@Args() {tokenUser, isbn}: ArgsAgregarFav){

        return await AgregarFav(tokenUser, isbn)
    }

    @Mutation(() => Send)
    async deleteFavorito(@Args() {tokenUser, isbn}: ArgsAgregarFav){

        return await DeleteFavorito(tokenUser, isbn)

    }
    @Mutation(() => Send)
    async agregarValoracion(@Args() {tokenUser, isbn, cant_estrellas}: ArgsAgregarValoracion){

        return await AgregarValoracion(cant_estrellas, isbn, tokenUser)

    }

    @Mutation(() => Send)
    async deleteValoracion(@Args() {tokenUser, isbn}: ArgsAgregarValoracion){

        return await DeleteValoracion(isbn, tokenUser)

    }
    @Mutation(() => Send)
    async RecoveryPassword(@Arg('email') email: string){

        return await ResetPassword(email)
    }

    @Query(() => SendUsers)
    async EsAdmin(@Arg('tokenUser') tokenUser: string){

        return await esAdmin(tokenUser)
    }
    
    @Query(() => SendFavoritos)
    async ExistFavorito(@Args() {tokenUser, isbn}: ArgsAgregarFav){

        return await existFav(tokenUser, isbn)
    }
    
    @Query(() => SendUser)
    async LoginUser(@Args() args: ArgsLogin){

        return await getLoginUser(args)
    }

    @Query(() => SendFavoritos)
    async getFavoritos(@Arg('tokenUser') tokenUser: string){

        return await GetFavoritos(tokenUser)
    }

    @Query(() => SendUsers)
    async getUsersAdmin() {

        return await GetAdminUsers()
    }

    @Query(() => SendComentarios) 
    async ExistComentario(@Args() {isbn, tokenUser}: ArgsComprado){

        return await existComentario(isbn, tokenUser)
    }

    @Query(() => SendValoracion) 
    async existValoracion(@Args() {isbn, tokenUser}: ArgsValorado){

        return await ExistValoracion(isbn, tokenUser)
    }

    @Query(() => SendComprados)
    async getBooksComprados(@Arg('tokenUser') tokenUser: string){

        return await GetLibrosComprados(tokenUser)
    }

    @Mutation(() => SendUser)
    async LoginGoogle(@Args() {nombre, email, password} : ArgsLogin){

        return await loginGoogle(nombre, email, password)
    }
    
}