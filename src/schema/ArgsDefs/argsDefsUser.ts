import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsLogin {

    @Field()
    nombre: string = '';

    @Field()
    apellido: string = '';

    @Field()
    email: string = '';

    @Field()
    password: string = '';

    @Field()
    tokenUser: string = '';
}

@ArgsType()
export class IniciarSesion {

    @Field()
    email: string;

    @Field()
    password: string
}

@ArgsType()
export class ArgsInsertCupon {

    @Field()
    codigo: string;

    @Field()
    tokenUser: string
}

@ArgsType()
export class ArgsInsertDireccion {

    @Field()
    tokerUser: string;

    @Field()
    nombre: string;

    @Field()
    apellido: string;

    @Field()
    direccion: string;

    @Field()
    AgregarInfo!: string;

    @Field()
    telefono!: number;

    @Field()
    cod_postal: number;
}

@ArgsType()
export class ArgsOpinion {

    @Field()
    opinion: string;

    @Field()
    isbn: string;

    @Field()
    tokenUser: string
}

@ArgsType()
export class ArgsValorar {

    @Field()
    cantidad_estrellas: number;

    @Field()
    isbn: string;

    @Field()
    tokenUser: string;
}

@ArgsType()
export class ArgsUpdateUser {

    @Field()
    tokenUser: string;

    @Field()
    nombre: string;

    @Field()
    apellido: string;

    @Field()
    email_orig: string;

    @Field()
    email: string;

    @Field()
    password: string;
}