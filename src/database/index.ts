import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "2205",
    database: "nlwValoriza",
    synchronize: true,
    logging: false,
    entities: [], // Adicione suas entidades aqui
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });