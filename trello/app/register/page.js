"use client";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 rounded bg-slate-700 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 rounded bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-slate-700 text-white"
        />

        <button className="w-full bg-green-600 py-2 rounded hover:bg-green-700 text-white">
          Create Account
        </button>
      </div>
    </div>
  );
}