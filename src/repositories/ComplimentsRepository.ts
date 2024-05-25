import { AppDataSource } from "../database/data-source";
import { Compliment } from "../entities/Compliment";

const ComplimentsRepository = AppDataSource.getRepository(Compliment);

export { ComplimentsRepository };   