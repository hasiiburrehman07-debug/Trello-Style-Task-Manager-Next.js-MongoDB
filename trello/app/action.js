"use server";
import { connectDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { revalidatePath } from "next/cache";

// 1. Fetch all tasks
export async function getTasks() {
  await connectDB();
  const tasks = await Task.find({}).lean();
  // Convert MongoDB _id to string so Next.js doesn't complain
  return tasks.map(t => ({ ...t, _id: t._id.toString() }));
}

// 2. Add a new task
export async function addTask(formData) {
  const title = formData.get("title");
  const status = formData.get("status");

  await connectDB();
  await Task.create({ title, status });
  
  revalidatePath("/dashboard"); 
}

export async function deleteTask(formData) {
  await connectDB();
  
  const id = formData.get("id");

  await Task.findByIdAndDelete(id);

  revalidatePath("/dashboard");
}

export async function updateTask(formData) {
  await connectDB();

  const id = formData.get("id");
  const title = formData.get("title");
             

  await Task.findByIdAndUpdate(id, { title });

  revalidatePath("/dashboard");
}

