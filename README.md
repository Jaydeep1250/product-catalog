Run
Copy code
# Product Management Application

This is a full-stack product management application built with Nest.js for the backend and Next.js for the frontend. The application allows users to manage products, including adding, deleting, and viewing product details and API documentation.

## Technologies Used

- **Backend:** Nest.js, TypeORM, PostgreSQL
- **Frontend:** Next.js, React
- **Styling:** Tailwind CSS

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- Docker and Docker Compose
- PostgreSQL

### Step 1: Clone the Repository

git clone https://github.com/Jaydeep1250/product-catalog.git
cd product-management-app

Step 2: Set Up the PostgreSQL Database

Run the following command to start the database:
docker-compose up -d

Step 3: Configure Environment Variables
Create a .env file in the backend directory and add the following environment variables:

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgers
DATABASE_PASSWORD=password  // database password
DATABASE_NAME=database name   // database name
JWT_SECRET=your_jwt_secret

Step 4: Install Dependencies
Navigate to the backend and frontend directories and install the required dependencies:

cd product-catalog-backend
npm install

cd ../product-catalog-frontend
npm install

Running the Application
Step 1: Start the Backend
Navigate to the backend directory and run the Nest.js application:

npm run start

Step 2: Start the Frontend
Navigate to the frontend directory and run the Next.js application:

npm run dev


Step 3: Access the Application
Open your browser and go to http://localhost:3000 to view the product management interface.