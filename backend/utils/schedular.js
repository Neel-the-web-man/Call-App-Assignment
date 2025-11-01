import cron from "node-cron";
import Call from "./models/Call.js";
import { initiateCall } from "../controllers/callController.js";

cron.schedule("* * * * *", async () => {
  const now = new Date();
  const dueCalls = await Call.find({ scheduled_time: { $lte: now }, status: "scheduled" });
  for (const call of dueCalls) await initiateCall(call);
});
