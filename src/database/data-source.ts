import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "2205",
    database: "nlwValoriza",
    synchronize: false,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    subscribers: [],
    // extra: {
    //     authPlugins: {
    //         mysql_native_password: () => require('mysql2/lib/auth_plugins').authPlugin('mysql_native_password'),
    //     },
    // },
});

export const initializeDataSource = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Data Source has been initialized!");
    }
    catch (err) {
        console.error("Error during Data Source initialization", err);
    }
}