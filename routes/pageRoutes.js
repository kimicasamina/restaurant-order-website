import express from "express";
const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.render("home/index", { title: "Home" });
});

// Offer page route
router.get("/offer", (req, res) => {
  res.render("offer/index", { title: "Offer" });
});

// About page route
router.get("/about-us", (req, res) => {
  res.render("about/index", { title: "About Us" });
});

// Services page route
router.get("/services", (req, res) => {
  res.render("services/index", { title: "Our Services" });
});

// Menus page route
router.get("/menu", (req, res) => {
  res.render("menu/index", { title: "Menu" });
});

// Add more routes as needed
export default router;
