"use client";

import React from "react";
import Link from "next/link";
import { Home, Share2, Upload, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-56 bg-black text-white flex flex-col justify-between px-4 py-6 shadow-lg z-50">
      {/* Top Logo / Brand */}
      <div>
        <h1 className="text-2xl font-semibold mb-10">🎬 MyApp</h1>
        <nav className="flex flex-col gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 hover:text-purple-400 transition"
          >
            <Home className="w-5 h-5" />
            <span>Home Page</span>
          </Link>

          <Link
            href="/social-share"
            className="flex items-center gap-3 hover:text-purple-400 transition"
          >
            <Share2 className="w-5 h-5" />
            <span>Social Share</span>
          </Link>

          <Link
            href="/upload"
            className="flex items-center gap-3 hover:text-purple-400 transition"
          >
            <Upload className="w-5 h-5" />
            <span>Video Upload</span>
          </Link>
        </nav>
      </div>

      {/* Sign Out */}
      <div>
        <button
          onClick={() => console.log("Sign out logic here")}
          className="flex items-center gap-3 text-red-400 hover:text-red-500 transition"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
