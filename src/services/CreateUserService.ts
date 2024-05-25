import { UserRepository } from "../repositories/UserRepository";
import { hash } from "bcryptjs";

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

        const userWhithoutMetadata = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            created_at: user.created_at,
            updated_at: user.updated_at,
        }


        return userWhithoutMetadata;
    }
}

export { CreateUserService }