import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // alows to parse the body of the request

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectMongoDB();
});