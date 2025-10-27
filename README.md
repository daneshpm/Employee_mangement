# Employee Management System with JWT Authentication

A full-stack employee management application built with React frontend and Spring Boot backend, featuring JWT-based authentication and role-based access control.

## Features

- **JWT Authentication**: Secure login/logout with token-based authentication
- **Role-based Access Control**: Admin and User roles with different permissions
- **Employee Management**: CRUD operations for employee data
- **Dashboard & Analytics**: Visual representation of employee data
- **Responsive Design**: Bootstrap-based responsive UI
- **Protected Routes**: Frontend route protection based on authentication status

## Tech Stack

### Backend
- Spring Boot 3.3.2
- Spring Security with JWT
- Spring Data JPA
- MySQL Database
- Maven

### Frontend
- React 19.2.0
- React Router DOM
- Axios for API calls
- Bootstrap 5 for styling
- React Icons

## Setup Instructions

### Prerequisites
- Java 17+
- Node.js 16+
- MySQL 8+
- Maven 3.6+

### Backend Setup

1. **Database Configuration**
   - Create a MySQL database named `employees_db`
   - Copy `.env.example` to `.env` and update with your database credentials:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your MySQL credentials:
     ```
     DB_USERNAME=root
     DB_PASSWORD=your_mysql_password
     JWT_SECRET=your_secure_jwt_secret_key
     ```

2. **Run the Backend**
   ```bash
   # Using Maven wrapper (recommended)
   ./mvnw spring-boot:run
   
   # Or if you have Maven installed
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:8080`

### Frontend Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Frontend**
   ```bash
   npm start
   ```
   The frontend will start on `http://localhost:3000`

## Authentication

### Default Users
After starting the application, you can register new users or create them directly in the database.

### API Endpoints

#### Authentication
- `POST /api/auth/signin` - User login
- `POST /api/auth/signup` - User registration

#### Employee Management (Protected)
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create employee
- `PUT /api/employees/{id}` - Update employee
- `DELETE /api/employees/{id}` - Delete employee

#### Test Endpoints
- `GET /api/test/all` - Public access
- `GET /api/test/user` - User role required
- `GET /api/test/admin` - Admin role required

## Usage

1. **Registration**: Create a new account at `/register`
2. **Login**: Sign in at `/login`
3. **Dashboard**: View employee statistics and charts
4. **Employee Management**: Add, edit, and delete employees
5. **Analytics**: View detailed employee analytics
6. **Admin Panel**: Access admin features (admin role required)

## Security Features

- JWT tokens with configurable expiration
- Password encryption using BCrypt
- CORS configuration for cross-origin requests
- Automatic token refresh handling
- Protected routes on both frontend and backend
- Role-based access control

## Project Structure

```
├── src/main/java/com/example/employee/    # Backend Java files
│   ├── User.java                          # User entity
│   ├── AuthController.java                # Authentication endpoints
│   ├── JwtUtils.java                      # JWT utility functions
│   └── WebSecurityConfig.java             # Security configuration
├── src/                                   # Frontend React files
│   ├── components/                        # React components
│   │   ├── Login.js                       # Login component
│   │   ├── Register.js                    # Registration component
│   │   └── ProtectedRoute.js              # Route protection
│   └── Services/                          # API services
│       ├── AuthService.js                 # Authentication service
│       └── AxiosInterceptor.js            # HTTP interceptor
└── pom.xml                                # Maven dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
