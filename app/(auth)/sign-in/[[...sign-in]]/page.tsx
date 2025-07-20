"use client";

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <Image
            src="/logo.svg" // replace with your logo path
            alt="Logo"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sign in to your account
          </p>
        </div>
        <SignIn path="/sign-in" routing="path" />
      </div>
    </div>
  );
}
