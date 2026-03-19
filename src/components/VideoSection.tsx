'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const VIDEO_TAB_KEYS = ['allVideos', 'beforeAfterTab', 'procedureTab', 'dietReview'] as const;

const VIDEO_IDS = {
  allVideos: ['SS-ILiL32cA', 'SJbaicTyR9c', 'cc1NWPVEGwg', 'M6IDFmGrCYA'],
  beforeAfterTab: ['HmV4Gm3jPzg', 'jSMpwnscRkA'],
  procedureTab: ['iFwiyHxEKJU', '_M3QTgIwYDU'],
  dietReview: ['eulIMtjCD9k', 'V70Al9gKsM8'],
};

export default function VideoSection() {
  const t = useTranslations('home');
  const vt = useTranslations('videos');
  const [activeTab, setActiveTab] = useState<keyof typeof VIDEO_IDS>('allVideos');
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const videoTitles = vt.raw(`items.${activeTab}`) as string[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-py bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-[1200ms] ease-[var(--ease-premium)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[11px] font-medium tracking-[0.3em] uppercase">TheLine TV</span>
            <div className="w-10 h-px bg-[#b8965a]" />
          </div>
          <h2 className="text-3xl lg:text-[2.8rem] font-extralight text-gray-900 tracking-tight">{t('thelineShorts')}</h2>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center gap-2 mb-14 flex-wrap transition-all duration-[1000ms] delay-200 ease-[var(--ease-premium)] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {VIDEO_TAB_KEYS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-[13px] font-medium transition-all duration-500 ${
                activeTab === tab
                  ? 'bg-[#111] text-white'
                  : 'bg-transparent text-gray-400 hover:text-gray-800 border border-gray-200 hover:border-gray-400'
              }`}
            >
              {t(tab)}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_IDS[activeTab].map((videoId, i) => (
            <a
              key={videoId}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group transition-all duration-[800ms] ease-[var(--ease-premium)] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="relative aspect-video overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                  alt={videoTitles[i]}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-[var(--ease-premium)] group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-5 h-5 text-[#b8965a] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-[13px] font-medium text-gray-700 group-hover:text-[#b8965a] transition-colors duration-300 line-clamp-2">
                {videoTitles[i]}
              </h3>
            </a>
          ))}
        </div>

        {/* YouTube link */}
        <div className={`text-center mt-16 transition-all duration-[1000ms] delay-500 ease-[var(--ease-premium)] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="https://www.youtube.com/@thelineps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#111] text-white px-8 py-4 text-[13px] font-medium tracking-wide hover:bg-[#222] transition-all duration-500"
          >
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            {vt('youtubeChannel')}
          </a>
        </div>
      </div>
    </section>
  );
}
