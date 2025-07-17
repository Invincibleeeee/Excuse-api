const express = require("express");
const router = express.Router();
const excuses = require("../data/excuses");

// GET /api/excuses — all excuses
router.get("/", (req, res) => {
  res.json(excuses);
});

// GET /api/excuses/random — random excuse
router.get("/random", (req, res) => {
  const random = excuses[Math.floor(Math.random() * excuses.length)];
  res.json(random);
});

// GET /api/excuses/category/:category — filter by category
router.get("/category/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const filtered = excuses.filter(e => e.category.toLowerCase() === category);

  if (filtered.length === 0) {
    return res.status(404).json({ error: "No excuses found for this category." });
  }

  res.json(filtered);
});

module.exports = router;
