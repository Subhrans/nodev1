import express from 'express';
import { connectDB } from './config/database.js';
import userRoutes from './routes/user.routes.js';
// const { connectDB } = require('./config/database');
// const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);

// Connect to DB
connectDB();

export default app;
