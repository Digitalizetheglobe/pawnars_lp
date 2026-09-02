'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LandingBanner({
  bannerId = '6a97d3ef21a331a8f5bded2a',
  className = '',
  onScrollClick,
  showScrollIndicator = true,
  fallbackDesktop,
  fallbackTablet,
  fallbackMobile,
  alt = 'Pawna Lake Villas Banner'
}) {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    const controller = new AbortController();

    async function fetchBanner() {
      try {
        setLoading(true);
        setHasError(false);
        const res = await fetch(`https://api.risingspaces.in/api/banners/${bannerId}`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch banner: ${res.status}`);
        }

        const json = await res.json();
        if (isMounted.current && json?.success && json?.data) {
          setBanner(json.data);
        } else if (isMounted.current) {
          setHasError(true);
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error loading banner:', err);
          if (isMounted.current) {
            setHasError(true);
          }
        }
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    }

    fetchBanner();

    return () => {
      isMounted.current = false;
      controller.abort();
    };
  }, [bannerId]);

  // Determine sources from API or fallbacks
  const baseUrl = 'https://api.risingspaces.in';
  
  const getFullUrl = (url, fallback) => {
    if (!url) return fallback || '';
    return url.startsWith('http://') || url.startsWith('https://') ? url : `${baseUrl}${url}`;
  };

  const isActive = banner ? banner.isActive !== false : !hasError;

  const desktopSrc = banner?.desktopBanner
    ? getFullUrl(banner.desktopBanner, fallbackDesktop)
    : fallbackDesktop;

  const tabletSrc = banner?.tabletBanner
    ? getFullUrl(banner.tabletBanner, fallbackTablet || desktopSrc)
    : (fallbackTablet || desktopSrc);

  const mobileSrc = banner?.mobileBanner
    ? getFullUrl(banner.mobileBanner, fallbackMobile || tabletSrc)
    : (fallbackMobile || tabletSrc);

  // If no banner data and no fallbacks, or inactive banner
  if ((!isActive || (!desktopSrc && !tabletSrc && !mobileSrc)) && !loading) {
    return null;
  }

  return (
    <div className={`relative w-full overflow-hidden bg-slate-900 transition-all duration-700 ease-out ${className}`}>
      {/* Smooth Shimmer / Skeleton Placeholder */}
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 transition-opacity duration-700 ease-in-out ${
          imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'
        }`}
        style={{ minHeight: '320px' }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-white/20 border-t-white/80 rounded-full animate-spin" />
        </div>
      </div>

      {/* Responsive Picture Element with Smooth Fade-in */}
      {(desktopSrc || tabletSrc || mobileSrc) && (
        <picture className="w-full h-auto block">
          {/* Mobile View: screen width <= 640px */}
          {mobileSrc && <source media="(max-width: 640px)" srcSet={mobileSrc} />}
          
          {/* Tablet View: screen width <= 1024px */}
          {tabletSrc && <source media="(max-width: 1024px)" srcSet={tabletSrc} />}
          
          {/* Desktop View: default / screen width > 1024px */}
          <img
            src={desktopSrc || tabletSrc || mobileSrc}
            alt={banner?.title || alt}
            className={`w-full h-auto object-cover block transition-all duration-700 ease-out transform ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'
            }`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              // If loaded image fails, fall back gracefully
              setImageLoaded(true);
            }}
          />
        </picture>
      )}

      {/* Floating Smooth Scroll Indicator */}
      {showScrollIndicator && onScrollClick && (
        <div className="absolute inset-0 z-10 pointer-events-none flex items-end justify-center pb-6 md:pb-10">
          <button
            type="button"
            onClick={onScrollClick}
            aria-label="Scroll down"
            className="pointer-events-auto p-2 text-white/90 hover:text-white transition-all transform hover:scale-110 active:scale-95 focus:outline-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] animate-bounce"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
