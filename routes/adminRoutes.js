import express from 'express';
import authJwt from '../middlewares/authJwt.js';
import dashboardController from '../controllers/dashboardControllers.js';
import tabunganController from '../controllers/tabunganControllers.js';

const adminRoutes = express.Router();

// route: /api/admin
adminRoutes.get("/", 
    [authJwt.verifyToken, authJwt.isAdmin],
    dashboardController.test);

// route: get tabungan
adminRoutes.get("/tabungan", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.getAllTabungan);

// route: get tabungan by userId
adminRoutes.get("/tabungan/:userId", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.getTabunganById);

// route: update tabungan by id tabungan
// { saldo = number, status = string }
adminRoutes.put("/tabungan/:tabunganId", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.updateTabunganById);

// post tabungan
// { uang = number, status = string }
adminRoutes.post("/tabungan/:userId/:tabunganId", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.postTabungan);

export default adminRoutes;