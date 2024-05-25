import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        console.log("Email:", email);
        if (!email) {
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await UserRepository.findOneBy({ email });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = UserRepository.create({
            name,
            email,
            admin,
        })

        await UserRepository.save(user);

        return user;
    }
}

export { CreateUserService }