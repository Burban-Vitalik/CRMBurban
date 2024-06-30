import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI =
  "mongodb+srv://burbanvitalik2002:Pwq3DxAYug4PowAn@crm-cluster.9h98iwa.mongodb.net/";
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Mongo DB connected"))
  .catch((err) => console.log(err));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// App server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
