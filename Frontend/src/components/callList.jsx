export default function CallList({ calls }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Scheduled Calls</h2>
      {calls.length === 0 ? (
        <p>No calls scheduled.</p>
      ) : (
        <ul>
          {calls.map((c) => (
            <li key={c._id} className="border-b py-2">
              <b>{c.phone_number}</b> — {c.status} —{" "}
              {new Date(c.scheduled_time).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
