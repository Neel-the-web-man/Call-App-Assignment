import express from "express";
import { scheduleCall, getCalls } from "../controllers/callController.js";
const router = express.Router();

router.post("/", scheduleCall);
router.get("/", getCalls);

export default router;
