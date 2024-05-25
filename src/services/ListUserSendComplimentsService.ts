import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const compliments = await ComplimentsRepository.find({
            where: {
                user_sender_id: user_id
            }
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService };