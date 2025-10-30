"use client";

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navigation() {
  const { user, isLoading } = useUser();

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="glass rounded-2xl px-6 py-4 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 text-white hover:text-aurora-green transition-colors">
            <span className="text-2xl">❄️</span>
            <span className="text-xl font-bold">ArcticGuardian</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-text-secondary hover:text-white transition-colors font-medium">
              Features
            </a>
            <a href="/#how-it-works" className="text-text-secondary hover:text-white transition-colors font-medium">
              How It Works
            </a>
            <a href="/#community" className="text-text-secondary hover:text-white transition-colors font-medium">
              Community
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            {isLoading ? (
              <div className="w-8 h-8 border-2 border-aurora-green border-t-transparent rounded-full animate-spin"></div>
            ) : user ? (
              <>
                <a
                  href="/dashboard"
                  className="hidden sm:block px-6 py-2.5 glass-hover rounded-lg text-white font-semibold transition-all"
                >
                  Dashboard
                </a>
                <a
                  href="/api/auth/logout"
                  className="px-6 py-2.5 bg-aurora-cyan/20 text-white font-semibold rounded-lg hover:bg-aurora-cyan/30 transition-all"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="hidden sm:block px-6 py-2.5 glass-hover rounded-lg text-white font-semibold transition-all"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="px-6 py-2.5 bg-aurora-green text-arctic-night font-semibold rounded-lg hover:bg-aurora-green/90 transition-all"
                >
                  Get Started
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
