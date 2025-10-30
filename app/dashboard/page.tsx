"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AuroraBackground from '@/components/AuroraBackground';

export default function DashboardPage() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-arctic-night to-arctic-deep">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-aurora-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading your dashboard...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <AuroraBackground />
      <Navigation />

      {/* Main Dashboard Content */}
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Welcome back, <span className="text-aurora-green">{user.name || 'Explorer'}</span>
          </h1>
          <p className="text-xl text-text-secondary">
            Plan your next arctic adventure and stay connected with those who matter most.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="/trips/new"
            className="group glass glass-hover p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 bg-aurora-green/20 rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
              ➕
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-aurora-green transition-colors">
              New Trip
            </h3>
            <p className="text-text-secondary">
              Plan your next expedition with detailed routes and waypoints
            </p>
          </a>

          <a
            href="/contacts"
            className="group glass glass-hover p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 bg-aurora-cyan/20 rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
              👥
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-aurora-cyan transition-colors">
              Emergency Contacts
            </h3>
            <p className="text-text-secondary">
              Manage who gets notified if you don't check in
            </p>
          </a>

          <a
            href="/profile"
            className="group glass glass-hover p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 bg-aurora-purple/20 rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
              ⚙️
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-aurora-purple transition-colors">
              Profile Settings
            </h3>
            <p className="text-text-secondary">
              Update your profile and notification preferences
            </p>
          </a>
        </div>

        {/* Recent Trips Section */}
        <div className="glass p-8 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Your Trips</h2>
            <a
              href="/trips"
              className="text-aurora-green hover:text-aurora-green/80 font-semibold transition-colors"
            >
              View All →
            </a>
          </div>

          {/* Empty State */}
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-aurora-green/10 rounded-full flex items-center justify-center text-6xl mx-auto mb-6">
              🗺️
            </div>
            <h3 className="text-2xl font-bold mb-4">No trips yet</h3>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Start planning your first arctic adventure. Create detailed trip plans, set check-in times, and share with emergency contacts.
            </p>
            <a
              href="/trips/new"
              className="inline-block px-8 py-4 bg-aurora-green text-arctic-night font-bold rounded-lg hover:bg-aurora-green/90 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-aurora-green/50"
            >
              Create Your First Trip
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
