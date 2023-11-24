import express from 'express';
import dotenv from 'dotenv';
import {RetrieveUserDetails} from "../application/use_cases/RetrieveUserDetails";
import {UserController} from "../infrastructure/api/controllers/userController";
import UserRouter from "../infrastructure/api/routes/userRoutes";
import {UserManagementService} from "../domain/services/UserManagement.service";
import { UserRepository } from '../infrastructure/repositories/UserRepository';

dotenv.config();
const app = express();

const retrieveUserDetails = new RetrieveUserDetails(new UserManagementService(new UserRepository()));
const userController = new UserController(retrieveUserDetails);
const userRouter = new UserRouter(userController);

app.use('/api', userRouter.router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
