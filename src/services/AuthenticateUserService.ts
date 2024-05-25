import { UserRepository } from "../repositories/UserRepository";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string,
    password: string,
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        if (!email) {
            throw new Error("Email is invalid");
        }

        const user = await UserRepository.findOneBy({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const passwordIsValid = await compare(password, user.password);

        if (!passwordIsValid) {
            throw new Error("Password incorrect");
        }

        const token = sign({
            email: user.email
        },
            "2fc33e5f5bf397e71543b89272520638",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return token;
    }
}

export { AuthenticateUserService };