'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutClinic() {
  const t = useTranslations('home');
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-py bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-[1200ms] ease-[var(--ease-premium)] ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/consult/icon_3.png"
                  alt="더라인성형외과 의료진"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#b8965a] text-white p-8 flex flex-col items-center justify-center">
                <div className="text-4xl font-light leading-none tracking-tight">31</div>
                <div className="text-[10px] tracking-[0.2em] uppercase mt-2 text-white/70">{t('yearsExperience')}</div>
              </div>

              {/* Floating doctor badge */}
              <div className="absolute top-8 -right-4 w-28 h-36 md:w-32 md:h-40 overflow-hidden shadow-2xl border-2 border-white">
                <Image
                  src="/images/doctors/badge_1.png"
                  alt="정유석 대표원장"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Decorative line */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#b8965a]/30" />
            </div>
          </div>

          {/* Right - Text */}
          <div className={`transition-all duration-[1200ms] delay-200 ease-[var(--ease-premium)] ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="section-label">About TheLine</div>

            <h2 className="text-3xl lg:text-[2.5rem] font-extralight text-gray-900 mb-2 leading-tight tracking-tight">
              {t('aboutTitle')}
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-10">
              {t('aboutTitleBold')}
            </h3>

            <p className="text-gray-400 text-[15px] leading-[2] mb-12 whitespace-pre-line">
              {t('aboutDesc')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5', label: t('aboutFeature1') },
                { icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z', label: t('aboutFeature2') },
                { icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5', label: t('aboutFeature3') },
                { icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z', label: t('aboutFeature4') },
              ].map((feat) => (
                <div key={feat.label} className="flex items-center gap-4 p-4 border border-gray-100 hover:border-[#b8965a]/30 transition-colors duration-500">
                  <div className="w-10 h-10 bg-[#faf8f4] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#b8965a]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                    </svg>
                  </div>
                  <span className="text-[13px] font-medium text-gray-700">{feat.label}</span>
                </div>
              ))}
            </div>

            <a href="tel:18990252" className="btn-gold">
              {t('makeAppointment')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
