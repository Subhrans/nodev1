import express from 'express';
import userRoutes from './routes/user.routes.js';
import { AppDataSource } from './config/ormconfig.js';

const app = express();

app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);

// Connect to DB
const PORT = process.env.PORT || 3306;

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected!");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("Database connection failed:", err));

export default app;
