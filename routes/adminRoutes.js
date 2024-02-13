import express from 'express';
import authJwt from '../middlewares/authJwt.js';
import dashboardController from '../controllers/dashboardControllers.js';
import tabunganController from '../controllers/tabunganControllers.js';
import userControllers from '../controllers/userControllers.js';

const adminRoutes = express.Router();

adminRoutes.get("/tabungan", 
    // [authJwt.verifyToken, authJwt.isAdmin],
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

// /*  post tabungan
// *   re1.body = { uang = number, status = string }
// *   params: 
// *   - userId = untuk post tabunganId baru ke user, 
// *   - tabunganId = tabunganid sebelumnya untuk get saldo
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

/**
 * @swagger
 * /api/admin/tabungan:
 *   get:
 *     summary: Create a JSONPlaceholder user.
 *     responses:
 *       201:
 *          description: Register admin success.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          type: list
 *                          properties:
 *                              datas:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          description: Tabungan id.
 *                                          example: 60f7b1b5e4c6f80015b4d1a0
 *                                      uang:
 *                                          type: number
 *                                          description: Uang setor tabungan.
 *                                          example: 100000
 *                                      saldo:
 *                                          type: number
 *                                          description: Saldo tabungan.
 *                                          example: 100000
 *                                      status:
 *                                          type: string
 *                                          description: Status tabungan.
 *                                          example: setor
 *                                      date:
 *                                          type: date
 *                                          description: auto input by date now.
 *                                          example: 2021-07-21T08:00:00.000Z   
 *                                      __v:
 *                                          type: number
 *                                          description: auto input by mongoose.
 *                                          example: 0 
 *       400:
 *          description: Get all Tabungan not found.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Tabungan Not Found.
 *                              example: Tabungan not found
 *       500:
 *          description: Get Tabungan error.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Get Tabungan error.
 *                              example: error.message
*/