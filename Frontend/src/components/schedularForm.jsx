import { useState } from "react";
import axios from "axios";

export default function ScheduleForm({ onSuccess }) {
  const [form, setForm] = useState({ phone_number: "", scheduled_time: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/calls", form);
    setForm({ phone_number: "", scheduled_time: "" });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Phone number"
        className="border p-2 mr-2"
        value={form.phone_number}
        onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
        required
      />
      <input
        type="datetime-local"
        className="border p-2 mr-2"
        value={form.scheduled_time}
        onChange={(e) => setForm({ ...form, scheduled_time: e.target.value })}
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Schedule Call
      </button>
    </form>
  );
}
