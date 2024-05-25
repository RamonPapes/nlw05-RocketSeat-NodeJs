import { AppDataSource } from "../database/data-source";
import { Tag } from "../entities/Tag";

const TagsRepository = AppDataSource.getRepository(Tag);

export { TagsRepository };