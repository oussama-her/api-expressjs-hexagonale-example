import { Request, Response } from 'express';
import {RetrieveUserDetails} from "../../../application/use_cases/RetrieveUserDetails";

export class UserController {
    constructor(private retrieveUserDetails: RetrieveUserDetails) {
        this.getUserDetails = this.getUserDetails.bind(this);
    }

    async getUserDetails(req: Request, res: Response) {
        const userId = req.params.id;
        const user = await this.retrieveUserDetails.execute(userId);
        res.json(user);
    }
}
