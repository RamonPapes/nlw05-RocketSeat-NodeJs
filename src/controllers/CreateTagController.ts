import { Request, Response } from "express";
import { CreateTagsService } from "../services/CreateTagsService";

class CreateTagController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const createTagsService = new CreateTagsService();

        const tag = await createTagsService.execute({ name });

        return res.status(200).json(tag);
    }
}

export { CreateTagController }