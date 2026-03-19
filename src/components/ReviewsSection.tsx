'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const REVIEW_IMAGES = [
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_4jwqBF7V_8b94b31943c330d9ba62a6e85301dfc633b17749.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_4v27YA6M_92572cbc083282376a06c0a2474d8bd0383f3a4e.png',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_b9Yz7SlN_ecc1eafeb7524bc4d7461fef580c95dfd30383cd.png',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_euct4RHl_c875695c10d081acd514da5d1a353d4ba2463355.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_EwNb75MO_d316c63a9363ed00de91f30aa5075e8672c9268e.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_KHogw7eY_f1abf6e1c95326d4af320d5c7271ccfd43e30a16.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_OVSUHtme_b48389f4a93f1f39f86b4746a8f49dc3f0b60c4b.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_pBHvGqrK_afb45a60cf39e1160d83a533e365d890248a1caf.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_PI9lzhVa_cb4f89c2786e976df6adb299362585b62722e3e2.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_qP5YES06_79ae3ad1af6eb5ecc4e921d5e61937b20ec90311.png',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_SthgzoRk_6365ef23bed2c5892b315e8d5017e5136f98b468.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_TP36Afqb_009170ea9cf78f419c71899f7346b544c63fc17f.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_W7xU9OTz_3c305b7b58ca722d58293305bfc9aaf18d852a48.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_ZKgs02eF_5c933e1a61a5e85fef5eebb009a2e4ea421895f2.jpg',
  '/images/review/f1e147bac94de17cafe9322ba7b0e488_ZMuFmO9B_34d524190a17385d8f490a628db4e6ecf3dab548.jpg',
];

const REVIEW_DATES = ['2025.02', '2025.02', '2025.01', '2025.01', '2025.01', '2025.01', '2024.12', '2024.12'];

export default function ReviewsSection() {
  const t = useTranslations('home');
  const rt = useTranslations('review');
  const locale = useLocale();
  const base = locale === 'ko' ? '' : `/${locale}`;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const categories = rt.raw('categories') as string[];
  const items = rt.raw('items') as Array<{ title: string; category: string }>;

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filtered = activeCategory === categories[0]
    ? items
    : items.filter((r) => r.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-py bg-[#faf8f4]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 transition-all duration-[1200ms] ease-[var(--ease-premium)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="section-label">Real Reviews</div>
            <h2 className="text-3xl lg:text-[2.8rem] font-extralight text-gray-900 tracking-tight">{t('selfieReview')}</h2>
            <p className="text-gray-400 mt-4 text-[15px]">
              {rt('total')} <span className="text-[#b8965a] font-semibold text-lg">403</span>{rt('count')}
            </p>
          </div>
          <Link
            href={`${base}/review`}
            className="btn-outline-gold mt-8 md:mt-0"
          >
            {t('viewMore')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Category tabs */}
        <div className={`flex gap-2 mb-12 overflow-x-auto pb-2 transition-all duration-[1000ms] delay-200 ease-[var(--ease-premium)] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[13px] font-medium whitespace-nowrap transition-all duration-500 ${
                activeCategory === cat
                  ? 'bg-[#b8965a] text-white'
                  : 'bg-white text-gray-500 hover:text-[#b8965a] border border-gray-200 hover:border-[#b8965a]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {filtered.map((review, i) => (
            <Link
              key={i}
              href={`${base}/review`}
              className={`group transition-all duration-[800ms] ease-[var(--ease-premium)] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: visible ? `${(i % 8) * 80}ms` : '0ms' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-gray-200">
                <Image
                  src={REVIEW_IMAGES[i % REVIEW_IMAGES.length]}
                  alt={review.title}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-[var(--ease-premium)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 text-white">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </span>
                </div>
              </div>
              <span className="inline-block text-[11px] text-[#b8965a] mb-2 font-medium tracking-wide">
                {review.category}
              </span>
              <h3 className="text-[13px] text-gray-700 group-hover:text-[#b8965a] transition-colors duration-300 line-clamp-2 font-medium leading-relaxed">
                {review.title}
              </h3>
              <p className="text-[11px] text-gray-300 mt-2">{REVIEW_DATES[i % REVIEW_DATES.length]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
