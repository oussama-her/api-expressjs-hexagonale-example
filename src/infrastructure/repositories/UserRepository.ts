import {UserRepository as UserRepositoryPort} from "../../domain/ports/UserRepository.port";
import {User} from "../../domain/entities/User";
import BaseRepository from "./BaseRepository";

export class UserRepository extends BaseRepository<User> implements UserRepositoryPort {
    constructor() {
        super(User);
    }
    public  async findById(userId: string): Promise<User> {
        const user = await this.model.findByPk(userId);
        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }
        return user;
    }
}
