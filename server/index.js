import express, { json } from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
connectDB();

app.use(
  cors({
    origin:"http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/user", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("running on port :", PORT);
});
