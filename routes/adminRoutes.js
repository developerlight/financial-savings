import express from 'express';
import authJwt from '../middlewares/authJwt.js';
import dashboardController from '../controllers/dashboardControllers.js';
import tabunganController from '../controllers/tabunganControllers.js';
import userControllers from '../controllers/userControllers.js';

const adminRoutes = express.Router();

// ############################
// tabungan
// ############################
// route: /api/admin
// route: get tabungan
adminRoutes.get("/tabungan", 
    [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.getAllTabungan);

// route: get tabungan by userId
adminRoutes.get("/tabungan/:userId", 
    [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.getTabunganById);

// route: update tabungan by id tabungan
// { saldo = number, status = string }
adminRoutes.put("/tabungan/:tabunganId", 
    [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.updateTabunganById);

/*  post tabungan
*   re1.body = { uang = number, status = string }
*   params: 
*   - userId = untuk post tabunganId baru ke user, 
*   - tabunganId = tabunganid sebelumnya untuk get saldo */
adminRoutes.post("/tabungan/:userId/:tabunganId", 
    [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.postTabungan);

// route: delete tabungan by id tabungan
adminRoutes.delete("/tabungan/:tabunganId",
    [authJwt.verifyToken, authJwt.isAdmin],
    tabunganController.deleteTabunganById);


// ############################
// USER
// ############################
// get all user
adminRoutes.get("/user", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    userControllers.getAllUsers);

// get user by id
adminRoutes.get("/user/:id", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    userControllers.getUserById);

// update user by id
// { username = string, email = string, phone = string, address = string }
adminRoutes.put("/user/:id", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    userControllers.updateUserById);

// delete user by id
adminRoutes.delete("/user/:id", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    userControllers.deleteUserById);

export default adminRoutes;