'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const DOCTOR_IMAGES = [
  '/images/doctors/badge_1.png',
  '/images/doctors/badge_2.png',
  '/images/doctors/badge_3.png',
  '/images/doctors/badge_4.png',
];

const DOCTOR_KEYS = ['jung', 'jo', 'kim', 'baek'] as const;
const CAREER_YEARS = [31, 30, 29, 0];

export default function DoctorsSection() {
  const t = useTranslations('doctors');
  const th = useTranslations('home');
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
    <section ref={ref} className="section-py bg-[#111] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-[1200ms] ease-[var(--ease-premium)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[11px] font-medium tracking-[0.3em] uppercase">Medical Team</span>
            <div className="w-10 h-px bg-[#b8965a]" />
          </div>
          <h2 className="text-3xl lg:text-[2.8rem] font-extralight text-white mb-4 tracking-tight">{th('medicalTeam')}</h2>
          <p className="text-gray-500 max-w-md mx-auto text-[15px]">{th('medicalTeamSub')}</p>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DOCTOR_KEYS.map((key, i) => {
            const specialties = t.raw(`${key}.specialties`) as string[];
            return (
              <div
                key={key}
                className={`group transition-all duration-[1000ms] ease-[var(--ease-premium)] ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <Image
                    src={DOCTOR_IMAGES[i]}
                    alt={t(`${key}.name`)}
                    fill
                    className="object-cover object-top transition-transform duration-[800ms] ease-[var(--ease-premium)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Career badge */}
                  {CAREER_YEARS[i] > 0 && (
                    <div className="absolute top-5 right-5 text-center">
                      <div className="text-2xl font-light text-white leading-none">{CAREER_YEARS[i]}</div>
                      <div className="text-[9px] tracking-[0.2em] uppercase mt-1 text-white/50">{th('years')}</div>
                    </div>
                  )}

                  {/* Hover overlay with specialties */}
                  <div className="absolute inset-0 bg-[#b8965a]/0 group-hover:bg-[#b8965a]/15 transition-colors duration-600 flex items-end">
                    <div className="w-full p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[var(--ease-premium)]">
                      <div className="flex flex-wrap gap-1.5">
                        {specialties.map((spec) => (
                          <span key={spec} className="text-[10px] bg-white/15 backdrop-blur-sm text-white px-2.5 py-1">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <p className="text-[#b8965a] text-[10px] font-medium tracking-[0.25em] uppercase mb-2">
                    {t(`${key}.title`)}
                  </p>
                  <h3 className="text-xl font-light text-white mb-1 tracking-wide">{t(`${key}.name`)}</h3>
                  <p className="text-gray-600 text-[13px]">{t(`${key}.career`)}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-[1200ms] delay-500 ease-[var(--ease-premium)] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            href={`${base}/about/doctors`}
            className="btn-outline-gold border-[#b8965a]/40 hover:border-[#b8965a]"
          >
            {th('viewAllDoctors')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
