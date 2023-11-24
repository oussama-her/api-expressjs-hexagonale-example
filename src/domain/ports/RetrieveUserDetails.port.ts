import {User} from "../entities/User";

export interface RetrieveUserDetails {
    retrieveUserDetailsByIdentification(userId: string): Promise<User>;
}
