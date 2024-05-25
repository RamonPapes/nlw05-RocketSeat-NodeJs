import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/UserRepository";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req;

    const user = await UserRepository.findOneBy({ id: user_id });

    if (!user) {
        throw new Error("User invalid");
    }

    if (user.admin) {
        return next();
    }

    return res.status(401).json({
        error: "Unauthorized"
    });
}