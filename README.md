# Cyberweb (Dashify) - Next.js Fullstack Application

This is a comprehensive full-stack application featuring a modern **Next.js** frontend and a robust **Node.js/Express** backend.

## 🚀 Project Structure

The project is organized as a monorepo for easier management:

- **/client**: The frontend application built with [Next.js](https://nextjs.org/).
- **/server**: The backend API server built with [Express.js](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/).

## 🛠️ Tech Stack

### Frontend (Client)
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript / JavaScript
- **Animations**: AOS (Animate On Scroll)

### Backend (Server)
- **Framework**: Node.js & Express
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT & Bcrypt
- **Security**: Helmet, Rate Limiting, CORS
- **Email**: Nodemailer

## 🏁 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- MongoDB (Local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/devanshsingh0503/Dashify.git
   cd Dashify
   ```

2. Install dependencies for both parts:
   ```bash
   # From the root
   npm install
   ```

### Running the Application

#### Start Frontend
```bash
cd client
npm run dev
```

#### Start Backend
```bash
cd server
npm run dev
```

## 🌐 Deployment

### Frontend
Deployed on **Vercel**. The build configuration is optimized for the `client/` subdirectory.

### Backend
Can be deployed on platforms like Render, Railway, or VPS.

---

*Bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).*
