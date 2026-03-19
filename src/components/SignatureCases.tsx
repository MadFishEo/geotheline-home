'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const CASES_DATA = [
  { id: 1, image: '/images/cases/case_1.png', tag: 'SVF LIPO', href: '/svf-lipo/liposuction' },
  { id: 2, image: '/images/cases/case_2.png', tag: 'SVF LIPO', href: '/svf-lipo/liposuction' },
  { id: 3, image: '/images/cases/case_3.png', tag: 'SVF LIPO', href: '/svf-lipo/liposuction' },
  { id: 4, image: '/images/cases/case_4.png', tag: 'BODY LIFT', href: '/face-body-lift/arm' },
  { id: 5, image: '/images/promotion/promo_6_403.jpg', tag: 'FACE LIFTING', href: '/face-body-lift/facelift' },
  { id: 6, image: '/images/promotion/promo_5_403.jpg', tag: 'SVF ANTI-AGING', href: '/svf-anti-aging/facelift' },
];

export default function SignatureCases() {
  const t = useTranslations('home');
  const ct = useTranslations('cases');
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

  const cases = CASES_DATA.map((item, i) => ({
    ...item,
    title: ct(`items.${i}.title`),
    subtitle: ct(`items.${i}.subtitle`),
    price: ct(`items.${i}.price`),
  }));

  return (
    <section ref={ref} className="section-py bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 transition-all duration-[1200ms] ease-[var(--ease-premium)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="section-label">Signature Cases</div>
            <h2 className="text-3xl lg:text-[2.8rem] font-extralight text-gray-900 tracking-tight">{t('signatureCase')}</h2>
            <p className="text-gray-400 mt-4 text-[15px]">{t('signatureSub')}</p>
          </div>
          <Link
            href={`${base}/promotion`}
            className="btn-outline-gold mt-8 md:mt-0"
          >
            {t('viewMore')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid - asymmetric layout */}
        <div className="grid grid-cols-12 gap-5">
          {cases.map((item, i) => {
            const colSpan = i === 0 || i === 3 ? 'col-span-12 md:col-span-8' : 'col-span-6 md:col-span-4';
            const aspectClass = i === 0 || i === 3 ? 'aspect-[16/9]' : 'aspect-square';

            return (
              <Link
                key={item.id}
                href={`${base}${item.href}`}
                className={`${colSpan} group relative overflow-hidden bg-gray-100 transition-all duration-[1000ms] ease-[var(--ease-premium)] ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
              >
                <div className={`relative ${aspectClass} overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[800ms] ease-[var(--ease-premium)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                  {/* Tag */}
                  <span className="absolute top-5 left-5 text-[10px] font-medium tracking-[0.2em] uppercase text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                    {item.tag}
                  </span>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="font-medium text-white text-lg lg:text-xl mb-1 group-hover:translate-x-1 transition-transform duration-600">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-[13px]">{item.subtitle}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[#b8965a] font-medium text-lg tracking-wide">{item.price}</span>
                      <span className="w-10 h-10 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-3 group-hover:translate-x-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
