import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function CatchAllPage() {
  const t = useTranslations('home');
  return (
    <main>
      <Header />
      <div className="pt-28 pb-20 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('consultNow')}</h1>
          <p className="text-gray-500 mb-8">{t('consultDesc')}</p>
          <a
            href="tel:18990252"
            className="inline-flex items-center gap-2 bg-[#b8975a] text-white px-8 py-4 text-base font-semibold hover:bg-[#9a7d47] transition-colors"
          >
            ☎ 1899-0252
          </a>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
