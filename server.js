import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import ejsLayouts from "express-ejs-layouts";

dotenv.config();
const app = express();
const __dirname = path.resolve();

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(ejsLayouts);
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/main");

// Routes
app.get("/", function (req, res) {
  console.log("SERVER IS READY");
  res.render("home/index", { title: "Home" });
});

app.use("/auth", authRoutes);
app.use("/order", orderRoutes);
app.use("/admin", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
