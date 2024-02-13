import express from "express";
import authController from "../controllers/authControllers.js";

const authRouter = express.Router();


authRouter.post("/admin-register", authController.registerAdmin);

authRouter.post("/admin-login", authController.loginAdmin);

authRouter.post("/admin-logout", authController.logoutAdmin);

authRouter.post("/user-register", authController.registerUser);

authRouter.post("/user-login", authController.loginUser);

authRouter.post("/user-logout", authController.logoutUser);



export default authRouter;

/**
 * @swagger
 * /api/auth/admin-register:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Bret
 *               email:
 *                  type: string
 *                  description: The user's email.
 *                  example: leanneGraham@gmail.com
 *     responses:
 *       201:
 *          description: Register admin success.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Register admin success.
 *                              example: Register Success
 *       400:
 *          description: Register admin failed.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Register admin failed.
 *                              example: Register Failed
 *       500:
 *          description: Register admin error.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Register admin error.
 *                              example: "E11000 duplicate key error collection: test.admins index: username_1 dup key: { username: \"Leanne Graham\" }"
 * /api/auth/admin-login:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Bret
 *     responses:
 *       201:
 *          description: Login admin success.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Login admin success.
 *                              example: Login Success
 *       400:
 *          description: Admin not found.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Admin not found.
 *                              example: Admin not found
 *       500:
 *          description: Register admin error.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Register admin error.
 *                              example: "data and hash arguments required"
 * /api/auth/admin-logout:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     description: Logout admin
 *     responses:
 *       201:
 *          description: logout admin success.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: logout admin success.
 *                              example: logout Success
 *       500:
 *          description: Register admin error.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Register admin error.
 *                              example: error.message
 * /api/auth/user-register:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Bret
 *               email:
 *                  type: string
 *                  description: The user's email.
 *                  example: leanneGraham@gmail.com
 *               phone:
 *                  type: string
 *                  description: The user's phone.
 *                  example: 08123456789
 *               address:
 *                  type: string
 *                  description: The user's adress.
 *                  example: Jl. Kebon Jeruk No. 1
 *     responses:
 *       201:
 *          description: Register user success.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Register user success.
 *                              example: Register Success
 *       400:
 *          description: Register user failed.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Register user failed.
 *                              example: Register Failed
 *       500:
 *          description: Register user error.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Register user error.
 *                              example: "11000 duplicate key error collection: test.users index: phone_1 dup key: { phone: \"08123456789\" }"
 * /api/auth/user-login:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Grahamm
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Bret
 *     responses:
 *       201:
 *          description: Login user success.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Login user success.
 *                              example: Login Success
 *       400:
 *          description: Admin not found.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Admin not found.
 *                              example: Admin not found
 *       500:
 *          description: Register user error.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Register user error.
 *                              example: "data and hash arguments required"
 * /api/auth/user-logout:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     description: Logout user
 *     responses:
 *       201:
 *          description: logout user success.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: logout user success.
 *                              example: logout Success
 *       500:
 *          description: Register user error.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              description: Register user error.
 *                              example: error.message
*/