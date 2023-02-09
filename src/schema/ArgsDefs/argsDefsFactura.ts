import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsGetFacurasFecha {

    @Field()
    fechaMenor: string = '';

    @Field()
    fechaMayor: string = '';
}

@ArgsType()
export class ArgsGetFacturasID {

    @Field()
    id_factura: string = '';
}