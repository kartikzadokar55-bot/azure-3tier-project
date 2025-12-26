const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());    // Allows your frontend to communicate with this server


// 1. Set up the Database Connection


// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: "root",
//   password: "",
//   database: "cloudapp"
// });

// 2. Simple Route
app.get("/api", (req, res) => {
  res.json({ message: "3-Tier Backend Running Successfully 🚀" });
});


// 3. Start the Server
app.listen(5000, () => console.log("Backend running on port 5000"));
