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
export class ArgsAgregarCupon {

    @Field()
    codigo: string;

    @Field()
    tokenUser: string
}

@ArgsType()
export class ArgsDeleteItem {

    @Field()
    isbn: string;

    @Field()
    tokenUser: string;
}

@ArgsType()
export class ArgsAgregarItem {

    @Field()
    isbn: string;

    @Field()
    cantidad: number;

    @Field()
    tokenUser: string;
}

@ArgsType()
export class ArgsAgregarDireccion {

    @Field()
    tokenUser: string;

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
export class ArgsRegistrarse {
    @Field()
    nombre: string;

    @Field()
    apellido: string;

    @Field()
    dni: number;

    @Field()
    email: string;

    @Field()
    password: string;
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