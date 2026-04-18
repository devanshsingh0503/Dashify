"use client";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>Access Denied</h1>
          <p className="text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Please log in to access the dashboard</p>
          <Link href="/login" className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover-scale transition animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-4xl font-bold mb-4">Welcome, {user.email}!</h2>
          <p className="text-gray-300">You are now logged in to your secure dashboard.</p>
        </div>

        <div className="mb-8 flex justify-end animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={handleLogout}
            className="bg-red-600/80 hover:bg-red-700 hover-scale px-6 py-2 rounded-lg text-white transition duration-300"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 border border-slate-700/50 p-8 rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover-translate-y transition animate-fade-in-left" style={{ animationDelay: '0.25s' }}>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2 text-white">Security Status</h3>
            <p className="text-gray-400">All systems operational</p>
          </div>

          <div className="bg-slate-800 border border-slate-700/50 p-8 rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover-translate-y transition animate-bounce-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2 text-white">Activity</h3>
            <p className="text-gray-400">No alerts at this time</p>
          </div>

          <div className="bg-slate-800 border border-slate-700/50 p-8 rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover-translate-y transition animate-fade-in-right" style={{ animationDelay: '0.35s' }}>
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2 text-white">Compliance</h3>
            <p className="text-gray-400">100% compliant</p>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700/50 p-8 rounded-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-6 text-white">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded animate-fade-in-left" style={{ animationDelay: '0.45s' }}>
              <span className="text-white">Account accessed</span>
              <span className="text-gray-400 text-sm">Just now</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
              <span className="text-white">Profile updated</span>
              <span className="text-gray-400 text-sm">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded animate-fade-in-left" style={{ animationDelay: '0.55s' }}>
              <span className="text-white">Login successful</span>
              <span className="text-gray-400 text-sm">5 hours ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
