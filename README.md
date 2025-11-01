# Call Scheduler - Full Stack Application

**Time Limit:** 1 hour  
**Level:** Junior Developer  

## Overview

This is a full-stack **Call Scheduler and Manager** application built using the **MERN stack**.  
It integrates with a provided **Mock Call API** (`http://localhost:5000`) that simulates real-time phone calls (similar to Twilio).  
Users can schedule calls, view upcoming and completed calls, and the system automatically triggers the call at the scheduled time.

---

## Tech Stack

- **Frontend:** React (Vite) + Axios  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (via Mongoose)  
- **Scheduler:** node-cron  
- **External API:** Mock Call API (`http://localhost:5000`)

---

## Features

- 📅 **Schedule Calls:** Users can select a phone number and a date-time for a call.  
- ⏰ **Automatic Execution:** A background scheduler runs every minute and initiates calls when due.  
- 🔁 **Status Tracking:** Each call’s lifecycle (scheduled → initiated → completed) is stored and viewable.  
- 🧾 **Call List:** Displays all calls with number, time, and status in the frontend UI.  

---


## Setup Instructions

```bash
### 1. Run the Mock Call API
This is the provided service that simulates phone calls.

cd interview_assignment
pip install -r requirements.txt
python api_server.py


The Call API will start at:
http://localhost:5000


2. Start the Backend

cd backend
npm install

Create a .env file in the backend folder:

MONGO_URI=mongodb://localhost:27017/callScheduler
PORT=4000


Start the backend server:

node server.js


Backend will run on http://localhost:4000


3. Start the Frontend
cd frontend
npm install
npm run dev


Frontend will run on http://localhost:5173

API Integration Details

The backend integrates with the Mock Call API at http://localhost:5000:

POST /api/call → Initiates a call immediately

GET /api/call/{call_id} → Fetches the current status of a specific call

Each scheduled call is stored in MongoDB with the following schema:

{
  phone_number: String,
  scheduled_time: Date,
  external_call_id: String,
  status: String
}

How It Works

User schedules a call through the frontend.

The backend saves it to MongoDB as “scheduled”.

A cron job runs every minute to find due calls and initiates them via the Mock Call API.

Once triggered, the call’s status updates in the database.

The frontend displays all scheduled and completed calls.

Design Decisions & Trade-offs

Used node-cron for lightweight background scheduling.

Chose MongoDB for flexible JSON-like data storage.

Focused on simplicity and clarity for quick one-hour development.

Frontend kept minimal for functional clarity over visual complexity.

Future Improvements

Add periodic polling to update live call statuses.

Enable editing and canceling scheduled calls.

Add user authentication for personalized call history.

Implement WebSocket updates for real-time status refresh.

Author

Neel
MERN Stack Developer
For queries: [neelkotkar@gmail.com]