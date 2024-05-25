import { TagsRepository } from "../repositories/TagsRepository";

class ListTagsService {
    async execute() {

        const tags = await TagsRepository.find();

        return tags;
    }
}

export { ListTagsService };