import express from "express";
import authController from "../controllers/authControllers.js";

const authRouter = express.Router();

// route: /api/auth
// admin
// register { username = string, password = string, email = string }
authRouter.post("/admin-register", authController.registerAdmin);

// login { username = string, password = string }
authRouter.post("/admin-login", authController.loginAdmin);

// logout
authRouter.post("/admin-logout", authController.logoutAdmin);

// user
// register { username = string, password = string, email = string , phone = string, address = string}
authRouter.post("/user-register", authController.registerUser);



export default authRouter;