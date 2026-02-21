import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">TaskFlow</h1>
      <p className="text-gray-400 text-lg">
        Manage your tasks like a pro 🚀
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
}