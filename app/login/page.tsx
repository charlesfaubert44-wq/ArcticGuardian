"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Auth0 login
    router.push("/api/auth/login");
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-arctic-night to-arctic-deep">
      <div className="glass p-12 rounded-2xl max-w-md w-full mx-4 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-aurora-cyan/20 rounded-full flex items-center justify-center">
          <span className="text-4xl">❄️</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
        <p className="text-text-secondary mb-6">
          Redirecting you to secure login...
        </p>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-4 border-aurora-cyan border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </main>
  );
}
