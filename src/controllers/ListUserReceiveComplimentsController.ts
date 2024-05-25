import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
    async handle(req: Request, res: Response) {
        const listUserReceiveComplimentsSerivce = new ListUserReceiveComplimentsService();
        const user_id = req.user_id;

        const compliments = await listUserReceiveComplimentsSerivce.execute(user_id);

        return res.json(compliments);
    }
}

export { ListUserReceiveComplimentsController };