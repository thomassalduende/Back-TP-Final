import { DataSource } from "typeorm";
// import { Books } from "./Entities/Books";
import { Users } from "./Entities/Users";
import { Ciudad } from "./Entities/Ciudad";


import { DB_USERNAME,DB_PASSWORD, DB_DATABASE, DB_HOST, DB_PORT } from "./config";

export const ConnectionBD = new DataSource({
    type: 'postgres',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port:Number(DB_PORT),
    database: DB_DATABASE,
    entities: [Ciudad, Users],
    synchronize: true
})