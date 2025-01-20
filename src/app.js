import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ejsLayouts from "express-ejs-layouts";
import adminRoutes from "./api/routes/adminRoutes.js";
import authRoutes from "./api/routes/authRoutes.js";
import orderRoutes from "./api/routes/orderRoutes.js";
import pageRoutes from "./api/routes/pageRoutes.js";

dotenv.config();
export const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(ejsLayouts);
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/main");

// Routes
app.use("/", pageRoutes);
app.use("/auth", authRoutes);
app.use("/order", orderRoutes);
app.use("/admin", adminRoutes);
