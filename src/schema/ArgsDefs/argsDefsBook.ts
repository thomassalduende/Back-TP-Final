import { ArgsType, Field, Float} from "type-graphql";

@ArgsType()
export class ArgsGetBook {
    @Field()
    nombre: string = '';

    @Field()
    isbn: string = '';

    @Field()
    genero: string = '';

    @Field()
    autor: string = '';

    @Field()
    descuento: boolean = false;
}

@ArgsType()
export class ArgsInsertBook {

    @Field()
    isbn: string

    @Field()
    imagen: string 

    @Field()
    nombre: string

    @Field(type => Float)
    precio: string

    @Field()
    stock: number

    @Field()
    descripcion: string

    @Field()
    fecha_ingreso: string

    @Field()
    descuento?: number

    @Field()
    genero: string

    @Field()
    autor: string
}

@ArgsType()
export class ArgsUpdateBook {

    @Field({nullable: true})
    isbn_orig: string

    @Field()
    isbn: string

    @Field()
    imagen: string 

    @Field()
    nombre: string

    @Field(type => Float)
    precio: string

    @Field()
    stock: number

    @Field()
    descripcion: string

    @Field({nullable: true})
    fecha_ingreso: string

    @Field({nullable: true})
    descuento?: number

    @Field()
    genero: string

    @Field()
    autor: string
}