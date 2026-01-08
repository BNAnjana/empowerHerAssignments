Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users directly see and interact with in their web browser.

1. User Interface (UI):
FE displays elements like buttons, forms, menus, images, and text.
It focuses on layout, design, responsiveness, and accessibility.
It is built using technologies like HTML, CSS, and JavaScript.

2. User Interaction:
It handles user actions like clicks, typing, scrolling, and form submissions.
It provides instant feedback for example form validation, animations, error messages.
It enhances user experience through smooth and interactive behavior.

3. Communication with Backend:
It sends requests to the backend using HTTP/HTTPS.
It receives responses from APIs.
It displays backend data dynamically on the UI.

Q2. Role of Backend (BE)

The Backend (BE) is the server-side part of a web application that manages logic, data, and security.

1. Server-Side Processing:
Processes client requests and applies business rules.
Handles calculations, validations, and workflows.
Generates responses for frontend requests.

2. Database Handling:
Stores, retrieves, updates, and deletes data.
Works with databases like MySQL, PostgreSQL, MongoDB.
Ensures data consistency and integrity.

3. Security and Authentication:
Manages user authentication and authorization.
Protects data using encryption and access control.
Prevents threats like SQL injection and unauthorized access.

Q3. Business Logic

Business Logic refers to the rules and decision-making processes that define how a business operates within a web application. It will be in between the frontend and database and tells what should happen when a user performs an action.

Characteristics:
Independent of UI design
Reflects real-world business rules
Ensures consistency across the application

Real-World Examples

1. E-commerce Application:
Apply discounts only if the cart value exceeds a certain amount
Calculate taxes based on user location
Prevent checkout if items are out of stock

2. Banking Application:
Allow money transfer only if sufficient balance exists
Set daily transaction limits
Block account after multiple failed login attempts

3. Online Booking System:
Prevent double booking of seats or rooms
Allow cancellation only within a defined time window
Adjust pricing based on demand or season

Q4. Client–Server Model

The Client–Server Model is a communication model where tasks are divided between service requesters (clients) and service providers (servers).

Client:
The user-facing application (browser, mobile app)
Sends requests for data or services
Examples: Chrome browser, mobile apps

Server:
A remote system that processes requests
Stores data and executes business logic
Sends responses back to the client

Communication Process:
Client sends a request (HTTP/HTTPS)
Server processes the request
Server returns a response (data or status)

Client displays the result to the user

Q5. Three-Tier Architecture

3-Tier Architecture divides a web application into three separate layers for better structure and scalability.

1. Presentation Layer:
Frontend/UI layer
Handles user interaction and display
Examples: HTML, CSS, React, Angular

2. Application (Business) Layer:
Contains business logic and rules
Processes requests and makes decisions
Examples: Node.js, Java Spring, Django

3. Data Layer:
Manages data storage and retrieval
Includes databases and data access logic
Examples: MySQL, MongoDB, PostgreSQL

Why This Architecture Is Used:
Improves scalability
Easier maintenance and updates
Better separation of concerns
Enhanced security

Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language, especially with Node.js.

1. Performance:
Uses non-blocking, event-driven architecture
Handles multiple requests efficiently
Ideal for real-time applications

2. Ecosystem:
Large package ecosystem via npm
Thousands of libraries and tools
Strong community support

3. Popular Backend Frameworks:
Node.js – runtime environment
Express.js – lightweight web framework
NestJS – scalable enterprise framework
Fastify – high-performance framework
