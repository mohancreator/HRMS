# HRMS - Human Resource Management System

HRMS is a **Human Resource Management System** designed to simplify employee management, leave tracking, and attendance monitoring.

## 📌 Features

- ✅ Employee Dashboard
- 🏝️ Leave Management System
- 🔐 Role-Based Access Control (RBAC)
- 💰 Salary Management
- ⏳ Attendance Tracking
- 👨‍💼 Admin & Employee Portals

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/hrms.git
cd hrms


2️⃣ Install Dependencies
Backend (Node.js + Express)

cd backend
npm install

Frontend (React.js)
cd ../frontend
npm install


⚙️ Configuration
3️⃣ Set Up Environment Variables
Create a .env file in the backend directory and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

▶️ Running the Project
4️⃣ Start Backend Server

cd backend
npm start


5️⃣ Start Frontend Server

cd ../frontend
npm start

Now, visit http://localhost:3000 to use the HRMS system! 🎉

🛠 Deployment
🚀 Deploy Backend (Vercel)

cd backend
vercel

Deploy Frontend (Netlify)

cd frontend
netlify deploy


📊 API Endpoints
Employee Management
GET /employees – Fetch all employees
POST /employees – Add a new employee
DELETE /employees/:id – Remove an employee
Leave Requests
GET /leaves – Fetch all leave requests
POST /leaves – Submit a leave request
PUT /leaves/:id – Update leave status
📌 Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT
Hosting: Vercel (Backend), Netlify (Frontend)
```
