// models/Task.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String,
     required: true
     },
  status: { 
    type: String, 
    default: "todo" 
  },
}, { timestamps: true });

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);