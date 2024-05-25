import { UserRepository } from "../repositories/UserRepository";
import { hash } from "bcryptjs";
import { instanceToPlain } from "class-transformer";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, password, admin }: IUserRequest) {
        if (!email) {
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await UserRepository.findOneBy({ email });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = UserRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })

        await UserRepository.save(user);

        return instanceToPlain(user);
    }
}

export { CreateUserService }