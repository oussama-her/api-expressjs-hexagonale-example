import {RetrieveUserDetails as RetrieveUserDetailsPort} from "../../domain/ports/RetrieveUserDetails.port";
import {User} from "../../domain/entities/User";

export class RetrieveUserDetails {
    constructor(private retrieveUserDetails: RetrieveUserDetailsPort) {}

    async execute(userId: string): Promise<User> {
        return await this.retrieveUserDetails.retrieveUserDetailsByIdentification(userId);
    }
}
