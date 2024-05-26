import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const compliments = await ComplimentsRepository.find({
            where: {
                user_receiver_id: user_id
            },
            relations: ["user_sender", "user_receiver", "tag"]
        });

        return compliments;
    }
}

export { ListUserReceiveComplimentsService };