import "reflect-metadata";
import express, { NextFunction, Request, Response, response } from "express";
import "express-async-errors"
import { initializeDataSource } from "./database/data-source";
import { router } from "./routes";

initializeDataSource()
    .then(() => {
        const app = express();

        app.use(express.json());

        app.use(router);

        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            if (err instanceof Error) {
                return res.status(400).json({
                    error: err.message
                })
            }
            else {
                response.status(500).json({
                    status: "error",
                    message: "Internal Server Error"
                })
            }
        })

        app.listen(3000, () => {
            console.log(`Server is running`);
        })
    })
    .catch((err) => {
        console.error("Failed to initialize the Data Source and start the server:", err);
    })