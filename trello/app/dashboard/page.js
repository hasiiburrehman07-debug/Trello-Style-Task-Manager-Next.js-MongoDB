"use server";
import { getTasks, addTask, deleteTask, updateTask } from "../action";

export default async function Dashboard() {
  const tasks = await getTasks(); // Fetch real data from MongoDB Community
  const columns = ["todo", "progress", "done"];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-6xl text-center font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        {columns.map((status) => (
          <div key={status} className="bg-slate-800 rounded-xl p-4">
            <h2 className="text-xl font-semibold capitalize mb-4">{status}</h2>

            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task._id} className="bg-slate-700 p-3 rounded-lg mb-3">
                  {task.title}
                </div>
              ))}

            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task._id} className="bg-slate-700 p-3 rounded-lg mb-3">

                  {/* UPDATE FORM */}
                  <form action={updateTask} className="flex gap-2 mb-2">
                    <input type="hidden" name="id" value={task._id.toString()} />
                    <input
                      name="title"
                      defaultValue={task.title}
                      className="bg-slate-600 text-sm p-1 rounded w-full outline-none"
                    />
                    <button
                      type="submit"
                      className="text-xs bg-green-600 px-2 rounded"
                    >
                      Update
                    </button>
                    
                  </form>
                  

                  {/* DELETE FORM */}
                  <form action={deleteTask}>
                    <input type="hidden" name="id" value={task._id} />
                    <button
                      type="submit"
                      className="text-xs bg-red-600 px-2 rounded"
                    >
                      Delete
                    </button>
                  </form>

                </div>
              ))}

            {/* Simple form to add a task using a Server Action */}
            <form action={addTask} className="mt-4">
              <input type="hidden" name="status" value={status} />
              <input
                name="title"
                placeholder="New task..."
                className="bg-slate-700 text-sm p-2 rounded w-full mb-2 outline-none"
                required
              />


              <button type="submit" className="text-sm px-3 rounded-xl text-blue-900 hover:text-blue-300 bg-blue-400">
                + Add Task
              </button>

            </form>


          </div>



        ))}
      </div>
    </div>
  );
}