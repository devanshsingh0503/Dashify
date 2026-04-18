"use client";

import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function Login() {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md animate-stacked-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h1 className="text-3xl font-bold text-black mb-6 animate-stacked-perspective" style={{ animationDelay: '0.2s' }}>Login</h1>

            <input
              type="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mb-4 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 animate-parallax-up" 
              style={{ animationDelay: '0.3s' }}
            />

            <input
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mb-6 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 animate-parallax-up" 
              style={{ animationDelay: '0.35s' }}
            />

            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 hover-scale transition duration-300 animate-stacked-slide-down" style={{ animationDelay: '0.4s' }}>
              Login
            </button>

            <p className="text-gray-600 text-center mt-4 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              Don't have an account? <Link href="/signup" className="text-black hover:text-gray-700 font-semibold">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}