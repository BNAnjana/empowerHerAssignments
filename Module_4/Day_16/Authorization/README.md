# Authorization-Based TODO Application

A secure REST API built with Node.js, Express, Supabase, and JWT-based authorization.
Each user can manage only their own TODOs.


## Features

- User Signup & Login
- Password hashing using bcrypt
- JWT-based authentication (1 hour expiry)
- Protected TODO CRUD operations
- User-specific authorization
- Clean project structure

## Tech Stack

- Node.js
- Express.js
- Supabase (PostgreSQL)
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

## Setup Instructions

1. Clone the repository

git clone <your-github-repo-url>

cd Authorization

2. Install dependencies

npm install

3. Setup Environment Variables

Create a .env file in the root directory:

PORT=5000

SUPABASE_URL=your_supabase_url

SUPABASE_KEY=your_supabase_anon_key

JWT_SECRET=your_jwt_secret

4. Setup Supabase Tables

Run the SQL scripts provided in the Supabase SQL editor to create:

- users
- todos

5. Start the Server
npm start

Server will run on:

http://localhost:3000

Authentication

All protected routes require a JWT token.

Authorization Header Format

Authorization: Bearer <JWT_TOKEN>

## API Endpoints

## Auth Routes

Signup

POST /api/auth/signup


Body

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Login

POST /api/auth/login


Body

{
  "email": "john@example.com",
  "password": "password123"
}


Response

{
  "token": "jwt_token_here"
}

## TODO Routes (Protected)

Create Todo

POST /api/todos


Body

{
  "title": "Learn JWT Authorization"
}

Get User Todos

GET /api/todos

Update Todo

PUT /api/todos/:id

Body

{
  "title": "Updated title",
  "completed": true
}

Delete Todo

DELETE /api/todos/:id

## Authorization Rules

Users can access only their own todos

userId is extracted from JWT, never from request body

Unauthorized access returns proper HTTP status codes

## Status Codes

200 OK

201 Created

204 No Content

401 Unauthorized

403 Forbidden

400 Bad Request

500 Server Error

## Project Structure

src/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── routes/
 ├── app.js
 └── server.js

## Testing

You can test APIs using:

- Postman
- Thunder Client
- cURL