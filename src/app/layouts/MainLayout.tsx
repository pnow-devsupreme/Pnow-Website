'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';
import Lenis from 'lenis';
import type * as React from 'react';
import { useEffect, useState } from 'react';

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

  // Initialize Lenis once for the whole app
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      wheelMultiplier: 1.5,
      infinite: false,
      autoResize: true,
      lerp: 0.2,
      syncTouch: false,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Prevent native wheel scrolling so Lenis can take over
    const preventDefaultScroll = (e: WheelEvent) => e.preventDefault();
    window.addEventListener('wheel', preventDefaultScroll, { passive: false });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', preventDefaultScroll);
      lenis.destroy();
    };
  }, []);

  const handleLoadingComplete = () => setIsLoadingComplete(true);

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
