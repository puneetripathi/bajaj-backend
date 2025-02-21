const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON requests

// POST /api - Accepts JSON data
app.post("/api", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received", data });
});

// GET /api - Returns a sample response
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

// GET /ping - Returns "pong"
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
