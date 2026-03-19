'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function FloatingButtons() {
  const t = useTranslations('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttons = [
    { label: t('bookSchedule'), href: 'tel:18990252', iconPath: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
    { label: t('chatConsult'), href: '#', iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    { label: t('costConsult'), href: '#', iconPath: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: t('directions'), href: 'https://maps.google.com/?q=서울+강남구+신사동+가로수길+65', iconPath: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' },
  ];

  return (
    <>
      {/* Floating action group */}
      <div className="fixed right-6 bottom-8 z-40 flex flex-col items-end gap-3">
        {/* Expanded buttons */}
        <div className={`flex flex-col gap-2.5 transition-all duration-600 ease-[var(--ease-premium)] ${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith('http') ? '_blank' : undefined}
              rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 group"
            >
              <span className="bg-[#111] text-white text-[11px] font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap tracking-wide">
                {btn.label}
              </span>
              <span className="w-11 h-11 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#b8965a] hover:bg-[#b8965a] hover:text-white transition-all duration-500">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={btn.iconPath} />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Main toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-12 h-12 shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-600 ease-[var(--ease-premium)] ${
            expanded
              ? 'bg-[#111] text-white rotate-45'
              : 'bg-[#b8965a] text-white hover:bg-[#9a7a42]'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed left-6 bottom-8 z-40 w-11 h-11 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400 hover:text-[#b8965a] transition-all duration-600 ease-[var(--ease-premium)] ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </>
  );
}
