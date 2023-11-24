import express, { Router } from 'express';
import {UserController} from "../controllers/userController";

class UserRouter {
    public router: Router;
    private userController: UserController;

    constructor(userController: UserController) {
        this.router = express.Router();
        this.userController = userController;
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/user/:id', this.userController.getUserDetails);
    }
}

export default UserRouter;
