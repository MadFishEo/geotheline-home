'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const BANNER_SLIDE_DATA = [
  { id: 1, image: '/images/banner/banner_1.jpg', href: '/promotion' },
  { id: 2, image: '/images/banner/banner_4.jpg', href: '/promotion' },
  { id: 3, image: '/images/banner/banner_3.jpg', href: '/promotion' },
  { id: 4, image: '/images/banner/banner_2.jpg', href: '/promotion' },
];

export default function HeroBanner() {
  const t = useTranslations('banner');
  const locale = useLocale();
  const base = locale === 'ko' ? '' : `/${locale}`;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = BANNER_SLIDE_DATA.map((s, i) => ({
    ...s,
    title: t(`slides.${i}.title`),
    subtitle: t(`slides.${i}.subtitle`),
    tag: t(`slides.${i}.tag`),
  }));

  const total = slides.length;
  const INTERVAL = 6000;

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 500);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const prev = () => {
    goTo((current - 1 + total) % total);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, INTERVAL);
    return () => clearInterval(interval);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-[#0d0d0d]">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <div className={`transition-all duration-800 ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
              {/* Tag */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-[#b8965a]" />
                <span className="text-[#b8965a] text-[11px] font-medium tracking-[0.3em] uppercase">
                  {slide.tag}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.15] mb-6 tracking-tight">
                {slide.title.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    {i === 0 ? line : <span className="font-semibold">{line}</span>}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl font-light text-white/60 mb-12 tracking-wide">
                {slide.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-5">
                <Link
                  href={`${base}${slide.href}`}
                  className="group inline-flex items-center gap-3 bg-[#b8965a] text-white px-8 py-4 text-[13px] font-medium tracking-widest uppercase transition-all duration-500 hover:bg-[#9a7a42] hover:gap-4"
                >
                  {t('viewDetails')}
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:18990252"
                  className="group flex items-center gap-3 text-white/50 hover:text-white text-[13px] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/30 tracking-widest uppercase">Free Consultation</span>
                    <span className="block font-medium text-sm tracking-wide">1899-0252</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-[1400px] mx-auto px-8 pb-10 flex items-end justify-between">
          {/* Slide counter */}
          <div className="flex items-center gap-4">
            <span className="text-white text-2xl font-light tracking-wider">{String(current + 1).padStart(2, '0')}</span>
            <div className="w-12 h-px bg-white/20" />
            <span className="text-white/30 text-sm">{String(total).padStart(2, '0')}</span>
          </div>

          {/* Progress dots + controls */}
          <div className="flex items-center gap-5">
            {/* Progress bar */}
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative h-0.5 overflow-hidden transition-all duration-500"
                  style={{ width: i === current ? '32px' : '8px' }}
                >
                  <div className={`absolute inset-0 rounded-full transition-colors duration-500 ${
                    i === current ? 'bg-[#b8965a]' : 'bg-white/20'
                  }`} />
                </button>
              ))}
            </div>

            {/* Nav buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/15 hover:border-white/30 text-white/40 hover:text-white rounded-full flex items-center justify-center transition-all duration-500"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => next()}
                className="w-10 h-10 border border-white/15 hover:border-white/30 text-white/40 hover:text-white rounded-full flex items-center justify-center transition-all duration-500"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => setPaused(!paused)}
                className="w-10 h-10 border border-white/15 hover:border-white/30 text-white/40 hover:text-white rounded-full flex items-center justify-center transition-all duration-500"
              >
                {paused ? (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                ) : (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side scroll indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="text-[9px] text-white/30 tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
