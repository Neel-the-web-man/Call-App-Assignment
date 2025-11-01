import axios from "axios";
import Call from "../models/call.js";

const CALL_API = "http://localhost:5000/api/call";

export const scheduleCall = async (req, res) => {
  const { phone_number, scheduled_time } = req.body;
  const call = await Call.create({ phone_number, scheduled_time });
  res.json(call);
};

export const initiateCall = async (call) => {
  const { data } = await axios.post(CALL_API, { phone_number: call.phone_number });
  call.external_call_id = data.call.id;
  call.status = data.call.status;
  await call.save();
};

export const getCalls = async (req, res) => {
  const calls = await Call.find().sort({ scheduled_time: -1 });
  res.json(calls);
};
