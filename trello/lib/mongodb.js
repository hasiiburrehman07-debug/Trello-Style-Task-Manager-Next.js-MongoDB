// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/trello_mini"; 

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to local MongoDB");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};