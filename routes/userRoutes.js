import express from "express";
import dashboardController from "../controllers/dashboardControllers.js";
import authJwt from "../middlewares/authJwt.js";

const userRoutes = express.Router();

/**
 * @swagger
 * /api/user/:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: testing user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                    type: string
 *                    description: Need to token for this api.
 *                    example : Hello from dashboardController
 *
 */
userRoutes.get(
  "/",
  [authJwt.verifyToken, authJwt.isUser],
  dashboardController.test
);

export default userRoutes;
