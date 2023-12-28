import express from 'express';
import dashboardController from '../controllers/dashboardControllers.js';
import authJwt from '../middlewares/authJwt.js';

const adminRoutes = express.Router();

// route: /api/admin
adminRoutes.get("/", 
    [authJwt.verifyToken, authJwt.isAdmin],
    dashboardController.test);

export default adminRoutes;