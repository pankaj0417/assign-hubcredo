# Assign HubCredo

A full-stack authentication application built with modern web technologies, featuring secure user registration, login, and session management.

![React](https://img.shields.io/badge/React-19.2.1-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?logo=mongodb)
![Express.js](https://img.shields.io/badge/Express.js-5.2.1-black?logo=express)
![License](https://img.shields.io/badge/License-ISC-blue)

---

## 📋 Overview

Assign HubCredo is a secure authentication platform that provides users with a seamless experience for account creation, authentication, and session management. The application features a responsive React frontend with Tailwind CSS styling and a robust Node.js/Express backend with MongoDB database integration.

---

## ✨ Features

- **User Authentication**

  - Secure user registration with validation
  - JWT-based login system
  - Password encryption using bcrypt
  - Secure logout functionality

- **Frontend**

  - Modern React interface with React Router
  - Responsive design powered by Tailwind CSS
  - Form handling with React Hook Form
  - HTTP client integration with Axios
  - Cookie-based session management

- **Backend**

  - RESTful API with Express.js
  - MongoDB database with Mongoose ODM
  - CORS-enabled for cross-origin requests
  - Environment variable configuration
  - Cookie parser middleware

- **Developer Experience**

  - Vite for fast build and development
  - ESLint for code quality
  - Nodemon for auto-reload during development
  - Hot Module Replacement (HMR)

- **Email Automation**
  - N8N integration for automated welcome emails after signup
  - Webhook-based user notification system

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pankaj0417/assign-hubcredo.git
   cd assign-hubcredo
   ```

2. **Setup Backend**

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the `server` directory:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Setup Frontend**

   ```bash
   cd ../client
   npm install
   ```

   Create a `.env` file in the `client` directory:

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Application

**Terminal 1 - Start Backend Server**

```bash
cd server
npm run dev
```

The server will run on `http://localhost:5000`

**Terminal 2 - Start Frontend Development Server**

```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173`

---

## 📁 Project Structure

```
assign-hubcredo/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx           # Login component
│   │   │   ├── Signup.jsx          # Registration component
│   │   │   ├── Logout.jsx          # Logout component
│   │   │   └── Page.jsx            # Protected page
│   │   ├── utils/
│   │   │   └── api.js              # API client setup
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── vite.config.js              # Vite configuration
│   ├── eslint.config.js            # ESLint configuration
│   └── package.json
│
└── server/                          # Node.js/Express Backend
    ├── config/
    │   └── db.js                   # MongoDB connection
    ├── controller/
    │   └── userController.js       # User logic
    ├── model/
    │   └── userSchema.js           # User model
    ├── routes/
    │   └── userRoutes.js           # API routes
    ├── index.js                    # Server entry point
    └── package.json
```

---

## 🔌 API Endpoints

### User Routes (`/api/user`)

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | `/createuser` | Register new user |
| POST   | `/login`      | Authenticate user |
| POST   | `/logout`     | Logout user       |

---

## 📧 N8N Email Automation

This project uses **N8N** to automatically send welcome emails to users after successful signup.

**How it works:**

1. User completes signup form
2. Backend creates user in MongoDB
3. Backend triggers N8N webhook
4. N8N sends personalized welcome email to the user

**Setup:**

- Configure `N8N_WEBHOOK_URL` in server `.env`
- Create N8N workflow with webhook trigger
- Set up email node to send welcome messages
- Activate workflow

---

## 🛠️ Available Scripts

### Frontend

```bash
npm run dev       # Start development server with HMR
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend

```bash
npm run dev       # Start with nodemon auto-reload
npm start         # Start production server
npm test          # Run tests (placeholder)
```

---

## 🔐 Security Features

- **Password Encryption**: Bcrypt hashing with salt rounds
- **JWT Authentication**: Stateless token-based authentication
- **CORS Protection**: Configurable cross-origin policies
- **Input Validation**: Server-side validation for all inputs
- **Secure Cookies**: HttpOnly cookie flags for session tokens
- **Environment Variables**: Sensitive data stored in .env files

---

## 🎨 Technology Stack

### Frontend

- **React 19.2.1** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Router 7.10.1** - Client-side routing
- **React Hook Form 7.68.0** - Efficient form handling
- **Axios 1.13.2** - HTTP client
- **React Icons 5.5.0** - Icon library

### Backend

- **Express.js 5.2.1** - Web framework
- **MongoDB 7.0** - NoSQL database
- **Mongoose 9.0.1** - ODM
- **JWT 9.0.3** - Authentication tokens
- **Bcrypt 6.0.0** - Password hashing
- **CORS 2.8.5** - Cross-origin handling
- **Nodemon 3.1.11** - Development tool

---

## 📝 Environment Variables

### Server (.env)

```env
PORT=5000
MONGODB_URI=mongodb--------------------------------
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Client (.env)

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Assign HubCredo
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the `LICENSE` file for details.

---

## 🔗 Links

- **Live Demo**: [https://assign-hubcredo.onrender.com](https://assign-hubcredo.onrender.com)
- **Repository**: [https://github.com/pankaj0417/assign-hubcredo](https://github.com/pankaj0417/assign-hubcredo)
- **Author**: [Pankaj](https://github.com/pankaj0417)

---

## 💡 Future Enhancements

- [ ] Email verification system
- [ ] Two-factor authentication (2FA)
- [ ] Social login integration
- [ ] User profile management
- [ ] Password reset functionality
- [ ] Admin dashboard
- [ ] Unit and integration tests
- [ ] API documentation with Swagger

---

## 📧 Support

If you encounter any issues or have questions, please open an [issue](https://github.com/pankaj0417/assign-hubcredo/issues) on GitHub.

---

**Made with ❤️ by Pankaj**
