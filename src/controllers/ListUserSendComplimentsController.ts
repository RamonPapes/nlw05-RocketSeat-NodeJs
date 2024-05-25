import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
    async handle(req: Request, res: Response) {
        const listUserSendComplimentsSerivce = new ListUserSendComplimentsService();
        const user_id = req.user_id;

        const compliments = await listUserSendComplimentsSerivce.execute(user_id);

        return res.json(compliments);
    }
}

export { ListUserSendComplimentsController };