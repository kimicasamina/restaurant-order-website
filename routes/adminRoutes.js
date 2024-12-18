import express from "express";
const router = express.Router();
import { addMenuItem, viewOrders, getMenuItem } from "../controllers/adminController.js";
import { authenticate, isAdmin } from "../middleware/authMiddleware.js";

router.post("/addMenu", authenticate, isAdmin, addMenuItem);
router.get("/orders", authenticate, isAdmin, viewOrders);
router.get("/getMenu", authenticate, isAdmin, getMenuItem)

export default router;
