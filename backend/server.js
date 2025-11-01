import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import callRoutes from "./routes/callRoutes.js";
import "./utils/scheduler.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));


app.use("/api/calls", callRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
