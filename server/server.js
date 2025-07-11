import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
const app = express();


app.use(express.json());

const corsOptions = {
    origin: ["https://portfolio-revamp-frntd-k0aei26pu-surajit-sutradhars-projects.vercel.app", "https://localhost:5173"],
    credentials: true
}

app.use(cors(corsOptions))

// app.use(cors({
//     origin: [
//         'http://localhost:5173',
//         'https://portfolio-revamp-frntd.vercel.app', // Frontend domain
//         'https://portfolio-revamp-gamma-henna.vercel.app',  // Backend domain (optional, for testing)
//         'https://localhost:5000'
//     ]
// }));

// connect with MongoDb
connectDB();

app.use("/api/blogs", blogRoutes);
app.use("/api/projects", projectRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

export default app;

