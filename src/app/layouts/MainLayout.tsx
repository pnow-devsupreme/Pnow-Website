'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';
import type * as React from 'react';
import { useState } from 'react'; // Import useState

import '@/styles/globals.css';
import '@/styles/colors.css';

import LoadingScreen from '@/app/components/loading/LoadingScreen';
import Footer from '@/app/layouts/Footer';
import NavBar from '@/app/layouts/Navbar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <html>
      <body>
        {/* Loading Screen - always rendered, but hides itself when complete */}
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />

        {/* Main content and other components - only rendered after loading completes */}
        {isLoadingComplete && (
          <>
            <NavBar />
            {children}
            <SpeedInsights />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
