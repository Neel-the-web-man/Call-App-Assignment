import mongoose from "mongoose";

const callSchema = new mongoose.Schema({
  phone_number: String,
  scheduled_time: Date,
  external_call_id: String,
  status: { type: String, default: "scheduled" },
});

export default mongoose.model("Call", callSchema);
