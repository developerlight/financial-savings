import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";

dotenv.config();

// route
import authRouter from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// connect to database
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log(`Connected to Database`));

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: '*' }));
app.use(
    session({
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60,
            sameSite: 'strict',
            secure: false,
            httpOnly: true
        },
    })
);

// use route
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// start server
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
