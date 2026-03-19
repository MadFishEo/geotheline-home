'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const base = locale === 'ko' ? '' : `/${locale}`;

  return (
    <footer className="bg-[#0d0d0d] text-white">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#b8965a]" />
        <div className="relative max-w-[1400px] mx-auto px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-light text-white tracking-tight">{t('freeConsult')}</h3>
            <p className="text-white/60 text-[13px] mt-2 tracking-wide">{t('freeConsultSub')}</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:18990252"
              className="bg-white text-[#b8965a] font-medium px-8 py-3.5 text-[13px] tracking-widest hover:shadow-xl transition-all duration-500"
            >
              1899-0252
            </a>
            <Link
              href={`${base}/promotion`}
              className="border border-white/30 text-white font-medium px-8 py-3.5 text-[13px] tracking-widest hover:bg-white/10 transition-all duration-500"
            >
              {t('onlineConsult')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-5">
            <Image
              src="/images/logo/logo_white.png"
              alt="더라인성형외과"
              width={140}
              height={36}
              className="h-8 w-auto mb-8"
            />
            <p className="text-gray-500 text-[13px] leading-[2] mb-6 max-w-sm">
              {t('address')}
            </p>
            <div className="space-y-1.5 text-[13px] text-gray-500">
              <p>{t('hours')}</p>
              <p>{t('closed')}</p>
            </div>
            <a href="tel:18990252" className="inline-flex items-center gap-3 mt-6 text-xl font-light text-[#b8965a] tracking-wider">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {t('phone')}
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-medium text-white mb-6 text-[12px] tracking-[0.2em] uppercase">{t('quickLinks')}</h4>
            <ul className="space-y-3.5">
              {[
                { labelKey: 'promotionLink', href: '/promotion' },
                { labelKey: 'reviewLink', href: '/review' },
                { labelKey: 'doctorLink', href: '/about/doctors' },
                { labelKey: 'locationLink', href: '/about/location' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`${base}${link.href}`}
                    className="text-[13px] text-gray-500 hover:text-[#b8965a] transition-colors duration-300"
                  >
                    {t(link.labelKey as 'promotionLink' | 'reviewLink' | 'doctorLink' | 'locationLink')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* International */}
          <div className="lg:col-span-2">
            <h4 className="font-medium text-white mb-6 text-[12px] tracking-[0.2em] uppercase">
              {t('international')}
            </h4>
            <ul className="space-y-3.5 text-[13px] text-gray-500">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white/5 flex items-center justify-center text-[10px] text-gray-400">L</span>
                {t('line')}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white/5 flex items-center justify-center text-[10px] text-gray-400">W</span>
                {t('wechat')}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white/5 flex items-center justify-center text-[10px] text-gray-400">W</span>
                {t('whatsapp')}
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div className="lg:col-span-3">
            <h4 className="font-medium text-white mb-6 text-[12px] tracking-[0.2em] uppercase">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/thelineps', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { name: 'YouTube', url: 'https://www.youtube.com/@thelineps', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { name: 'Blog', url: 'https://blog.naver.com/thelineps', path: 'M3 3h18v18H3V3zm2 2v14h14V5H5zm3 3h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-800 hover:border-[#b8965a] flex items-center justify-center text-gray-500 hover:text-[#b8965a] transition-all duration-500"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-10">
              <p className="text-[12px] text-gray-500 mb-3 tracking-wide uppercase">Subscribe for updates</p>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-transparent border border-gray-800 px-4 py-3 text-[13px] text-white placeholder-gray-600 focus:outline-none focus:border-[#b8965a] transition-colors"
                />
                <button className="bg-[#b8965a] text-white px-6 py-3 text-[12px] font-medium tracking-widest uppercase hover:bg-[#9a7a42] transition-colors duration-500">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[11px] tracking-wide">{t('copyright')}</p>
          <p className="text-gray-700 text-[11px] tracking-wide">
            사업자등록번호: 등록번호 | 대표: 정유석 | 의료기관명: 더라인성형외과의원
          </p>
        </div>
      </div>
    </footer>
  );
}
