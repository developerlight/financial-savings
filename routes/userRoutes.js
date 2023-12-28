import express from 'express';
import dashboardController from '../controllers/dashboardControllers.js';
import authJwt from '../middlewares/authJwt.js';



const userRoutes = express.Router();

// route: /api/user
userRoutes.get("/", 
    [authJwt.verifyToken, authJwt.isUser],
    dashboardController.test);

export default userRoutes;