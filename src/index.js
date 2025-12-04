import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './db/index.js';

dotenv.config({
    path:"./.env",
});

console.log("Environment variables loaded:", process.env.MONGODB_URL ? "MONGODB_URL loaded" : "MONGODB_URL not loaded");
console.log("PORT:", process.env.PORT);


const port = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });
