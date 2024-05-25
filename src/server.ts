import "reflect-metadata";
import express from "express";
import { initializeDataSource } from "./database/data-source";
import { router } from "./routes";

initializeDataSource()
    .then(() => {
        const app = express();

        app.use(express.json());

        app.use(router);

        app.listen(3000, () => {
            console.log(`Server is running`);
        })
    })
    .catch((err) => {
        console.error("Failed to initialize the Data Source and start the server:", err);
    })