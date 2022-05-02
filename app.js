import express from 'express';
import DBConnection from './dbconnection/dbconnection.js';
import web from './routes/web.js';
import cors from 'cors';

const app = express();
app.use(cors())
const PORT = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
DBConnection(DATABASE_URL);

//Json 
app.use(express.json());

// Load Routes
app.use("/api", web)


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});