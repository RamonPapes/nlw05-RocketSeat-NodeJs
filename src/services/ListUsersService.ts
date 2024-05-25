import { UserRepository } from "../repositories/UserRepository";
import { instanceToPlain } from "class-transformer";

class ListUsersService {
    async execute() {
        const users = await UserRepository.find();

        return instanceToPlain(users);
    }
}

export { ListUsersService };
