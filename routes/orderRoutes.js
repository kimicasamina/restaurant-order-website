import express from "express";
const router = express.Router();
import { placeOrder, getOrders } from "../controllers/orderController.js";
import { authenticate } from "../middleware/authMiddleware.js";

router.post("/placeOrder", authenticate, placeOrder);
router.get("/getOrders", authenticate, getOrders);

export default router;
