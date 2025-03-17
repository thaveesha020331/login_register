// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize the application
const app = express();
dotenv.config(); // For using environment variables

// Middleware
app.use(express.json());  // To parse incoming JSON requests
app.use(cors());          // To handle Cross-Origin requests

const URI = "mongodb+srv://admin:1234@yakadabadu.bi9yq.mongodb.net/?retryWrites=true&w=majority&appName=YAKADABADU"

1234
// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Sample route to check if server is working
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// You can add more routes here
// Example route for user registration
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Example registration logic (e.g., save to MongoDB)
  // This would typically be more complex, including validation and hashing the password
  res.send('User registered!');
});

// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
