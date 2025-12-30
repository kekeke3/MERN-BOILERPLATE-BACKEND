📝 Task Manager Backend (MERN Boilerplate)








A MERN stack backend boilerplate with authentication, task management, and clean modular architecture. Ideal for building scalable APIs.

🚀 Features

🔐 JWT-based user authentication

🗂 CRUD operations for tasks

🧩 Modular folder structure (routes, controllers, services, models, middlewares)

✅ Input validation with express-validator

🔒 Password hashing with bcrypt

🌐 CORS support

🐬 MySQL database integration

⚡ Nodemon for fast development

📁 Project Structure
src/
│
├── app.js
├── server.js
│
├── routes/
│   ├── auth.routes.js
│   └── task.routes.js
│
├── controllers/
│   ├── auth.controller.js
│   └── task.controller.js
│
├── services/
│   ├── auth.service.js
│   └── task.service.js
│
├── models/
│   ├── user.model.js
│   └── task.model.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   ├── validate.middleware.js
│   └── task.validation.js
│
├── tests/
│   └── task.test.js
│
└── config/
    └── db.js

⚡ Installation

Clone the repo:

git clone https://github.com/yourusername/task-manager-backend.git
cd task-manager-backend


Install dependencies:

npm install


Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=task_manager
JWT_SECRET=your_jwt_secret
PORT=5000


Start the server:

# Development
npm run dev

# Production
npm start

📦 API Endpoints
Authentication
Method	Route	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and get JWT
Tasks
Method	Route	Description
GET	/api/tasks	Get all tasks (auth)
POST	/api/tasks	Create a task (auth)
PUT	/api/tasks/:id	Update a task (auth)
DELETE	/api/tasks/:id	Delete a task (auth)
🧪 Testing

Run the tests:

npm test


Sample test for task routes included.

🛠 Tech Stack

Node.js

Express.js

MySQL

JWT Authentication

bcrypt

express-validator

nodemon
