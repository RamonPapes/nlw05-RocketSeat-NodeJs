import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User";

const UserRepository = AppDataSource.getRepository(User);

export { UserRepository };