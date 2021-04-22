import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    port: 3306,
    host: "localhost",
    username: "root",
    password: "mysqL@507",
    database: "ssm_db",
    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    dropSchema: true,
}  

export = config