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

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbW9uQGdtYWlsLmNvbSIsImlhdCI6MTcxNjY2Nzg4MSwiZXhwIjoxNzE2NzU0MjgxLCJzdWIiOiI4MGNlZDhmOC01NmUyLTRhMWUtYTYzZC1jZDlhN2Q5ODQ3ZTMifQ.Yk8wMNtooHiBBHzcbhLhUMJSjbAtEzxY3_8VtvWkngA