import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController {
    async handle(req: Request, res: Response) {
        const createComplimentService = new CreateComplimentService();

        const { user_sender_id, user_receiver_id, tag_id, message } = req.body;

        const compliment = await createComplimentService.execute({ user_sender_id, user_receiver_id, tag_id, message });

        return res.status(200).json(compliment);
    }
}

export { CreateComplimentController };