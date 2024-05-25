import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UserRepository } from "../repositories/UserRepository";
import { TagsRepository } from "../repositories/TagsRepository";  // Certifique-se de ter um repositório para tags

interface IComplimentRequest {
    user_sender_id: string;
    user_receiver_id: string;
    tag_id: string;
    message: string;
}

class CreateComplimentService {
    async execute({ user_sender_id, user_receiver_id, tag_id, message }: IComplimentRequest) {
        if (user_sender_id === user_receiver_id) {
            throw new Error("Incorrect User Receiver");
        }

        const userSenderExists = await UserRepository.findOneBy({ id: user_sender_id });
        const userReceiverExists = await UserRepository.findOneBy({ id: user_receiver_id });
        const tagExists = await TagsRepository.findOneBy({ id: tag_id });

        if (!userSenderExists) {
            throw new Error("User Sender does not exist");
        }

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exist");
        }

        if (!tagExists) {
            throw new Error("Tag does not exist");
        }

        const compliment = ComplimentsRepository.create({
            tag_id,
            user_receiver_id,
            user_sender_id,
            message
        });

        await ComplimentsRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService };
