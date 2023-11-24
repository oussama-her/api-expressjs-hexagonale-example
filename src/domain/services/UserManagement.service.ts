import {RetrieveUserDetails} from "../ports/RetrieveUserDetails.port";
import {User} from "../entities/User";
import {UserRepository} from "../ports/UserRepository.port";

export class UserManagementService implements RetrieveUserDetails {
    constructor(private userRepository: UserRepository) {}

    async retrieveUserDetailsByIdentification(userId: string): Promise<User> {
        return await this.userRepository.findById(userId);
    }
}
