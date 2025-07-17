const express = require("express");
const app = express();
const cors = require("cors");
const excusesRoutes = require("./routes/excuses");

app.use(cors());
app.use("/api/excuses", excusesRoutes);

app.get("/", (req, res) => {
  res.send("Excuse API is running 🚀");
});

// Render uses process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
