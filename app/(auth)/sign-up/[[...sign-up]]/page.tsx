"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create an Account
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Join us by signing up below
          </p>
        </div>
        <SignUp path="/sign-up" routing="path" />
      </div>
    </div>
  );
}
