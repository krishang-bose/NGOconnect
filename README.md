# NGOconnect

NGOconnect is a platform designed to bridge the gap between NGOs and individuals who want to contribute to social causes. The application provides a seamless way for users to discover NGOs, learn about their missions, and contribute through donations or volunteering.

## Features

### User Features
- **Signup/Login**: Secure user authentication using JWT and cookie-based sessions.
- **Dashboard**: Personalized dashboard for users to manage their profiles and contributions.
- **NGO Search**: Discover NGOs based on location, category, or cause.
- **Profile Management**: Update personal details and view contribution history.

### Admin Features
- **NGO Management**: Add, update, or remove NGO details.
- **User Management**: Monitor user activity and manage accounts.

## Technical Overview

### Frontend
- **Framework**: React with Vite for fast development.
- **Styling**: TailwindCSS for responsive and modern UI.
- **State Management**: Zustand for managing user authentication and global state.
- **Libraries**: React Router for navigation, React Hot Toast for notifications.

### Backend
- **Framework**: Express.js for building RESTful APIs.
- **Database**: MongoDB with Mongoose for schema-based data modeling.
- **Authentication**: JWT and bcrypt for secure user authentication.
- **Environment Variables**: Managed using `.env` for sensitive data.

### Deployment
- **Frontend**: Deployed on a static hosting service (e.g., Netlify or Vercel).
- **Backend**: Hosted on a cloud platform (e.g., Heroku or AWS).
- **Database**: MongoDB Atlas for cloud-based database management.

## Project Structure

### Frontend
- `/src/pages`: Contains React components for each page (e.g., Home, AboutUs, Dashboard).
- `/src/store`: Zustand store for managing global state.
- `/src/lib`: Axios instance for API calls.

### Backend
- `/routes`: API routes for authentication, NGOs, and user management.
- `/models`: Mongoose schemas for database collections.
- `/controllers`: Logic for handling API requests.

## Team Contributions

### Krishang Bose (Frontend Development Lead)
- Led the frontend development, focusing on responsive design and user experience.
- Integrated APIs and implemented state management using Zustand.

### Anil Kumar (Backend Development Lead)
- Designed and implemented the backend architecture with secure APIs.
- Collaborated with the frontend team for seamless integration.

### Aaraw (UI/UX Designer)
- Conducted user research and designed the app's UI/UX prototypes in Figma.

### Khush (Project Manager)
- Created project presentations and demonstration videos for milestone reviews.

## How to Run the Project

### Prerequisites
- Node.js and npm installed.
- MongoDB instance (local or cloud-based).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/NGOconnect.git
   ```
2. Navigate to the project directory:
   ```bash
   cd NGOconnect
   ```
3. Set up the backend:
   ```bash
   cd backend
   npm install
   cp .env_sample .env
   # Update .env with your MongoDB URI and JWT secret
   npm start
   ```
4. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
5. Open the app in your browser at `http://localhost:3000`.

## Future Enhancements
- Add payment gateway integration for donations.
- Implement advanced search filters for NGOs.
- Introduce analytics for NGO performance tracking.

## License
This project is licensed under the MIT License.