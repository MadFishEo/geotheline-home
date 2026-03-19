'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <div ref={ref}>
      <span className="text-5xl lg:text-6xl font-extralight text-white tracking-tight">
        {count.toLocaleString()}
      </span>
      <span className="text-[#b8965a] text-2xl lg:text-3xl font-light ml-1">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  const t = useTranslations('home');

  const stats = [
    { target: 31, suffix: t('statYears'), label: t('statYearsLabel') },
    { target: 15000, suffix: '+', label: t('statCasesLabel') },
    { target: 403, suffix: '+', label: t('statReviewsLabel') },
    { target: 4, suffix: t('statDoctorsUnit'), label: t('statDoctorsLabel') },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#111]" />
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8965a]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8965a]/20 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <div className="w-8 h-px bg-[#b8965a]/30 mx-auto my-5" />
              <p className="text-gray-500 text-[13px] tracking-[0.15em] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
