import { useState, useEffect } from "react";
import axios from "axios";
import ScheduleForm from "./components/schedularForm";
import CallList from "./components/callList.jsx";

function App() {
  const [calls, setCalls] = useState([]);

  const fetchCalls = async () => {
    const res = await axios.get("http://localhost:4000/api/calls");
    setCalls(res.data);
  };

  useEffect(() => {
    fetchCalls();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📞 Call Scheduler</h1>
      <ScheduleForm onSuccess={fetchCalls} />
      <CallList calls={calls} />
    </div>
  );
}

export default App;
