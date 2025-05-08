# NGOconnect

## Project Creation Journey

### Krishang's Perspective (Frontend Development Lead)

The journey of creating NGOconnect began with a clear vision of building a platform that bridges the gap between NGOs and individuals willing to contribute. My primary focus was on the frontend, ensuring the user interface was intuitive, responsive, and visually appealing. I started by setting up the project using Vite for its fast development environment and integrated TailwindCSS for styling. 

The first milestone was designing the layout and navigation. I created reusable components like the `Header`, `Footer`, and `HomePage` to maintain consistency across the app. Using React Router, I implemented seamless navigation between pages. I also worked on integrating the `zustand` state management library to handle authentication and user state efficiently.

Collaboration with the backend team was crucial. I worked closely with Anil to integrate APIs for user authentication, NGO search, and donation functionalities. Testing the API endpoints and ensuring smooth data flow between the frontend and backend was a significant part of my role. Additionally, I optimized the app for performance, ensuring fast load times and a smooth user experience.

Throughout the process, I focused on accessibility and responsiveness, ensuring the app worked seamlessly across devices. The final result is a user-friendly platform that empowers individuals to connect with NGOs effortlessly.

---

### Anil's Perspective (Backend Development Lead)

As the backend lead, my role was to build a robust and scalable server-side architecture for NGOconnect. The journey began with setting up the Express.js server and connecting it to MongoDB using Mongoose. I designed the database schema to store user data, NGO details, and donation records efficiently.

The first step was implementing user authentication. I used `bcryptjs` to securely hash passwords and `jsonwebtoken` to generate tokens for session management. The `protectRouter` middleware ensured secure access to protected routes. I also implemented APIs for user signup, login, and logout, which were tested thoroughly before integration.

Next, I focused on creating APIs for NGO search and donation functionalities. These endpoints were designed to handle large datasets efficiently, ensuring quick response times. I worked closely with Krishang to integrate these APIs into the frontend, ensuring seamless communication between the client and server.

To enhance security, I configured environment variables for sensitive data like the database URI and JWT secret. I also implemented CORS and cookie-based authentication to ensure secure cross-origin requests.

Collaboration was key throughout the project. Regular discussions with the frontend team helped align the backend functionalities with the app's overall vision. The result is a secure, scalable backend that powers the NGOconnect platform effectively.