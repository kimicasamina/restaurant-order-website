import express from "express";
const router = express.Router();
import { placeOrder, getOrders } from "../controllers/orderController.js";
import { authenticate } from "../middleware/authMiddleware.js";

router.post("/order", authenticate, placeOrder);
router.get("/orders", authenticate, getOrders);

export default router;
