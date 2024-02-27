const express = require("express");
const mongoose = require("mongoose");
const expenseRoutes = require("./routes/expenseRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const auth = require("./routes/auth"); // Import user routes
const keys = require("./config/keys");
const cors = require("cors"); // Import cors middleware

const app = express();

// Connect to MongoDB
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use("/expenses", expenseRoutes);
app.use("/categories", categoryRoutes);
app.use("/user", auth);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
