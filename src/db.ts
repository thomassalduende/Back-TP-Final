import { DataSource } from "typeorm";
import { Books } from "./Entities/Books";
import { Users } from "./Entities/Users";
import { Ciudad } from "./Entities/Ciudad";
import { Autor } from "./Entities/Autor";
import { Carrito } from "./Entities/Carrito";
import { CuponDeDescuento } from "./Entities/CuponDeDescuento";
import { Editorial } from "./Entities/Editorial";
import { Envio } from "./Entities/Envio";
import { Factura } from "./Entities/Factura";
import { Genero } from "./Entities/Genero";
import { IdAutor } from "./Entities/IdAutor";
import { LineaCarrito } from "./Entities/LineaCarrito";
import { LineaFactura } from "./Entities/LineaFactura";
import { Oferta } from "./Entities/Oferta";
import { Provincia } from "./Entities/Provincia";
import { Valoracion } from "./Entities/Valoracion";

import { DB_USERNAME,DB_PASSWORD, DB_DATABASE, DB_HOST, DB_PORT } from "./config";

export const ConnectionBD = new DataSource({
    type: 'postgres',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port:Number(DB_PORT),
    database: DB_DATABASE,
    entities: [Autor, Books, Carrito,
         Ciudad, CuponDeDescuento, Editorial, 
         Envio, Factura, Genero, IdAutor, 
         LineaCarrito, LineaFactura, Oferta, 
         Provincia, Users, Valoracion],
    synchronize: true,
    logging: true
})