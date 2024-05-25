import { TagsRepository } from "../repositories/TagsRepository";
import { v4 as uuid } from "uuid";

interface ITagRequest {
    name: string;

}

class CreateTagsService {
    async execute({ name }: ITagRequest) {
        if (!name) {
            throw new Error("Name incorrect");
        }
        const tagAlreadyExists = await TagsRepository.findOneBy({ name })

        if (tagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        const tag = {
            id: uuid(),
            name
        }

        await TagsRepository.save(tag);

        return tag;

    }
}

export { CreateTagsService };