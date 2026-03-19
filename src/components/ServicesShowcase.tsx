'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const SERVICES = [
  { image: '/images/promotion/promo_1_500.jpg', href: '/svf-lipo/liposuction' },
  { image: '/images/promotion/promo_2_500.jpg', href: '/svf-anti-aging/facelift' },
  { image: '/images/promotion/promo_4_500.jpg', href: '/face-body-lift/facelift' },
  { image: '/images/promotion/promo_5_500.jpg', href: '/breast/svf' },
  { image: '/images/promotion/promo_7_500.jpg', href: '/petit/botox' },
  { image: '/images/cases/case_1.png', href: '/svf-lipo/fat-transfer' },
];

export default function ServicesShowcase() {
  const t = useTranslations('home');
  const st = useTranslations('services');
  const locale = useLocale();
  const base = locale === 'ko' ? '' : `/${locale}`;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-py bg-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-[1200ms] ease-[var(--ease-premium)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[11px] font-medium tracking-[0.3em] uppercase">Services</span>
            <div className="w-10 h-px bg-[#b8965a]" />
          </div>
          <h2 className="text-3xl lg:text-[2.8rem] font-extralight text-gray-900 mb-4 tracking-tight">
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-[15px] leading-relaxed">
            {t('servicesSub')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <Link
              key={i}
              href={`${base}${service.href}`}
              className={`group relative bg-white overflow-hidden transition-all duration-[1000ms] ease-[var(--ease-premium)] card-hover ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={st(`items.${i}.title`)}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-[var(--ease-premium)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600" />

                {/* Number badge */}
                <div className="absolute top-5 left-5 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[13px] font-light text-gray-800">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-2 bg-white text-gray-900 text-[12px] font-medium px-5 py-2.5 tracking-wide">
                    {t('viewMore')}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#b8965a] transition-colors duration-500 mb-2">
                  {st(`items.${i}.title`)}
                </h3>
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  {st(`items.${i}.desc`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
