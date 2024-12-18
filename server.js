import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/adminRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/auth", authRoutes);
app.use("/order", orderRoutes);
app.use("/admin", adminRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
