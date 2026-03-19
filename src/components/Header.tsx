'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';

const LOCALES = [
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'th', label: 'ภาษาไทย', flag: '🇹🇭' },
] as const;

type LocaleCode = (typeof LOCALES)[number]['code'];

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const isTransparent = transparent && !scrolled;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: LocaleCode) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  const menuItems = [
    { key: 'consultation', label: t('consultation'), href: '/promotion' as const, sub: [
      { label: t('promotion'), href: '/promotion' as const },
      { label: t('openConsult'), href: '/open-consult' as const },
      { label: t('doctorQA'), href: '/doctor-qa' as const },
      { label: t('costConsult'), href: '/cost-consult' as const },
    ]},
    { key: 'svfAntiAging', label: t('svfAntiAging'), href: '/svf-anti-aging' as const, sub: [
      { label: t('svfSkinTreatment'), href: '/svf-anti-aging/skin' as const },
      { label: t('svfFaceliftSub'), href: '/svf-anti-aging/facelift' as const },
      { label: t('svfCellTherapy'), href: '/svf-anti-aging/therapy' as const },
    ]},
    { key: 'svfLipo', label: t('svfLipo'), href: '/svf-lipo' as const, sub: [
      { label: t('svfLiposuctionSub'), href: '/svf-lipo/liposuction' as const },
      { label: t('svfFatTransferSub'), href: '/svf-lipo/fat-transfer' as const },
      { label: t('svfBreastTransferSub'), href: '/svf-lipo/breast-transfer' as const },
    ]},
    { key: 'faceBodyLift', label: t('faceBodyLift'), href: '/face-body-lift' as const, sub: [
      { label: t('faceliftSub'), href: '/face-body-lift/facelift' as const },
      { label: t('browForehead'), href: '/face-body-lift/brow' as const },
      { label: t('neckLift'), href: '/face-body-lift/neck' as const },
      { label: t('armLiftSub'), href: '/face-body-lift/arm' as const },
      { label: t('thighLiftSub'), href: '/face-body-lift/thigh' as const },
    ]},
    { key: 'petit', label: t('petit'), href: '/petit' as const, sub: [
      { label: t('botox'), href: '/petit/botox' as const },
      { label: t('filler'), href: '/petit/filler' as const },
      { label: t('threadLift'), href: '/petit/thread-lift' as const },
    ]},
    { key: 'breast', label: t('breast'), href: '/breast' as const, sub: [
      { label: t('implantBreast'), href: '/breast/implant' as const },
      { label: t('svfBreastSurgery'), href: '/breast/svf' as const },
      { label: t('breastRevision'), href: '/breast/revision' as const },
    ]},
    { key: 'review', label: t('review'), href: '/review' as const, sub: [
      { label: t('selfieReview'), href: '/review' as const },
      { label: t('beforeAfter'), href: '/review/before-after' as const },
      { label: t('thelineTV'), href: '/review/tv' as const },
    ]},
    { key: 'about', label: t('about'), href: '/about' as const, sub: [
      { label: t('doctorIntro'), href: '/about/doctors' as const },
      { label: t('clinicInfo'), href: '/about' as const },
      { label: t('location'), href: '/about/location' as const },
    ]},
  ];

  const currentLocaleLabel = LOCALES.find(l => l.code === locale);

  // Compact nav for locales with longer menu labels
  const isCompactLocale = locale === 'ko' || locale === 'zh' || locale === 'ja';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]'
        }`}
      >
        {/* Top info bar */}
        <div className={`transition-all duration-500 overflow-hidden border-b ${isTransparent ? 'max-h-10 opacity-100 border-white/10' : 'max-h-0 opacity-0 border-transparent'}`}>
          <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-9 text-[11px] tracking-wide">
            <div className="flex items-center gap-5 text-white/60">
              <span>서울 강남구 신사동 가로수길 65</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="hidden sm:inline">평일 10:00 - 19:00</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <a href="https://www.instagram.com/thelineps" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.youtube.com/@thelineps" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
              <a href="https://blog.naver.com/thelineps" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-10">
              <Image
                src="/images/logo/logo.png"
                alt="더라인성형외과"
                width={140}
                height={36}
                className={`h-9 w-auto transition-all duration-500 ${isTransparent ? 'brightness-0 invert' : ''}`}
              />
            </Link>

            {/* Desktop Nav - hidden below 2xl for long-text locales, xl for compact locales */}
            <nav className={`hidden items-center gap-0 ${isCompactLocale ? 'xl:flex' : '2xl:flex'}`}>
              {menuItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap py-2 font-medium transition-all duration-300 hover-underline ${
                      isCompactLocale ? 'px-4 text-[13px] tracking-wide' : 'px-2.5 text-[12px] tracking-normal'
                    } ${isTransparent ? 'text-white/85 hover:text-white' : 'text-gray-600 hover:text-[#b8965a]'}`}
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-400 ${
                      activeMenu === item.key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'
                    }`}>
                      <div className="w-52 bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 overflow-hidden">
                        <div className="py-1.5">
                          {item.sub.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-5 py-2.5 text-[13px] text-gray-500 hover:bg-[#faf8f4] hover:text-[#b8965a] transition-all duration-300"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Phone */}
              <a href="tel:18990252" className={`hidden lg:flex items-center gap-2 text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap ${
                isTransparent ? 'text-white/80' : 'text-gray-500'
              }`}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                1899-0252
              </a>

              {/* Divider */}
              <div className={`hidden lg:block w-px h-4 ${isTransparent ? 'bg-white/20' : 'bg-gray-200'}`} />

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex flex-row items-center gap-1.5 px-2.5 py-1.5 text-[12px] rounded-lg transition-all ${
                    isTransparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className="text-sm leading-none">{currentLocaleLabel?.flag}</span>
                  <span className="hidden sm:inline leading-none">{currentLocaleLabel?.label}</span>
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-3 w-44 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100/50 rounded-xl overflow-hidden z-50">
                    {LOCALES.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => switchLocale(loc.code)}
                        className={`w-full text-left flex flex-row items-center gap-2.5 px-4 py-2.5 text-[13px] whitespace-nowrap hover:bg-[#faf8f4] transition-colors ${
                          locale === loc.code ? 'text-[#b8965a] font-medium bg-[#faf8f4]' : 'text-gray-500'
                        }`}
                      >
                        <span className="text-sm leading-none">{loc.flag}</span>
                        <span className="leading-none">{loc.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href="/promotion"
                className={`hidden ${isCompactLocale ? 'lg:inline-flex' : '2xl:inline-flex'} items-center px-6 py-2.5 text-[12px] font-medium tracking-widest uppercase rounded-full transition-all duration-500 ${
                  isTransparent
                    ? 'border border-white/30 text-white hover:bg-white hover:text-[#111]'
                    : 'bg-[#111] text-white hover:bg-[#b8965a]'
                }`}
              >
                {t('consultation')}
              </Link>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 transition-colors ${isCompactLocale ? 'xl:hidden' : '2xl:hidden'} ${
                  isTransparent ? 'text-white' : 'text-gray-700'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h10M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isCompactLocale ? 'xl:hidden' : '2xl:hidden'} transition-all duration-600 overflow-hidden ${
          mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-50 overflow-y-auto max-h-[85vh]">
            <div className="px-6 py-8 space-y-1">
              {menuItems.map((item) => (
                <div key={item.key}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-[15px] font-medium text-gray-800 hover:text-[#b8965a] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <div className="ml-4 border-l border-gray-100 pl-4 space-y-0.5">
                      {item.sub.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-2 text-[13px] text-gray-400 hover:text-[#b8965a] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <a href="tel:18990252" className="flex items-center gap-3 px-4 py-3 text-[#b8965a] font-semibold text-lg tracking-wide">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  1899-0252
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {langOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
      )}
    </>
  );
}
