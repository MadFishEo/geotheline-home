'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function InfoBoxes() {
  const t = useTranslations('home');
  const locale = useLocale();
  const base = locale === 'ko' ? '' : `/${locale}`;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const boxes = [
    {
      title: t('openConsult'),
      desc: t('openConsultDesc'),
      href: '/open-consult',
      iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      step: '01',
    },
    {
      title: t('doctorQA'),
      desc: t('doctorQADesc'),
      href: '/doctor-qa',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      step: '02',
    },
    {
      title: t('privateConsult'),
      desc: t('privateConsultDesc'),
      href: '/cost-consult',
      iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      step: '03',
    },
    {
      title: t('promotionEvent'),
      desc: t('promotionEventDesc'),
      href: '/promotion',
      iconPath: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
      step: '04',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-[1200ms] ease-[var(--ease-premium)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[11px] font-medium tracking-[0.3em] uppercase">Process</span>
            <div className="w-10 h-px bg-[#b8965a]" />
          </div>
          <h2 className="text-3xl lg:text-[2.8rem] font-extralight text-gray-900 tracking-tight">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map((box, i) => (
            <Link
              key={box.title}
              href={`${base}${box.href}`}
              className={`group relative p-8 bg-white border border-gray-100 hover:border-[#b8965a]/30 transition-all duration-700 ease-[var(--ease-premium)] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
            >
              {/* Step number */}
              <div className="text-[48px] font-extralight text-gray-100 group-hover:text-[#b8965a]/15 transition-colors duration-700 leading-none mb-6">
                {box.step}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-[#faf8f4] group-hover:bg-[#b8965a]/10 flex items-center justify-center mb-5 transition-colors duration-500">
                <svg className="w-5 h-5 text-[#b8965a]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={box.iconPath} />
                </svg>
              </div>

              <h3 className="font-semibold text-gray-900 text-lg mb-3 group-hover:text-[#b8965a] transition-colors duration-500">
                {box.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                {box.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[13px] font-medium text-[#b8965a] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                {t('goTo')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b8965a] group-hover:w-full transition-all duration-700 ease-[var(--ease-premium)]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
