const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/api", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, message: "Invalid data format" });
  }

  const numbers = data
    .filter((item) => !isNaN(item) && item !== " ") // Filter valid numbers (ignore spaces)
    .map(String) // Convert all numbers to strings
    .sort(); // Sort lexicographically

  const alphabets = data
    .filter((item) => typeof item === "string" && /^[a-zA-Z]$/.test(item)) // Ensure it's a single letter
    .sort(); // Preserve case while sorting

  const highest_alphabet =
    alphabets.length > 0 ? [alphabets[alphabets.length - 1]] : [];

  return res.status(200).json({
    is_success: true,
    user_id: "ansh_singh_23022004",
    email: "ansh23004@gmail.com",
    roll_number: "22BCS10112",
    numbers,
    alphabets,
    highest_alphabet,
  });
});

// GET /api - Returns a sample response
app.get("/api", (req, res) => {
  return res.status(200).json({
    operation_code: 1,
  });
});

// GET /ping - Returns "pong"
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
