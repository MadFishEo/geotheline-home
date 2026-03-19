import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import AboutClinic from '@/components/AboutClinic';
import ServicesShowcase from '@/components/ServicesShowcase';
import StatsSection from '@/components/StatsSection';
import SignatureCases from '@/components/SignatureCases';
import DoctorsSection from '@/components/DoctorsSection';
import VideoSection from '@/components/VideoSection';
import ReviewsSection from '@/components/ReviewsSection';
import InfoBoxes from '@/components/InfoBoxes';
import QuickConsultForm from '@/components/QuickConsultForm';
import FloatingButtons from '@/components/FloatingButtons';

function ConsultSection() {
  const t = useTranslations('home');
  return (
    <section className="section-py bg-[#faf8f4] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <div className="section-label">Consultation</div>
            <h2 className="text-3xl lg:text-[2.5rem] font-extralight text-gray-900 mb-2 leading-tight tracking-tight">
              {t('consultHeadingPre')}
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
              <span className="text-[#b8965a]">{t('consultHeadingHighlight')}</span>{t('consultHeadingPost')}
            </h3>
            <p className="text-gray-400 text-[15px] leading-[2] mb-10 whitespace-pre-line">
              {t('consultDesc')}
            </p>
            <div className="flex flex-col gap-5">
              {(['consultStep1', 'consultStep2', 'consultStep3'] as const).map((key, i) => (
                <div key={key} className="flex items-center gap-5 text-gray-600">
                  <span className="w-10 h-10 bg-[#b8965a]/8 text-[#b8965a] flex items-center justify-center text-[13px] font-medium flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[14px] font-medium">{t(key)}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-7 bg-white border border-gray-100">
              <p className="text-[11px] text-gray-400 mb-2 font-medium tracking-[0.15em] uppercase">{t('phoneConsultLabel')}</p>
              <a href="tel:18990252" className="flex items-center gap-3 text-xl font-light text-[#b8965a] tracking-wider">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                1899-0252
              </a>
              <p className="text-[11px] text-gray-300 mt-2">{t('phoneHours')}</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 lg:p-12 border border-gray-100">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{t('onlineConsultTitle')}</h3>
            <p className="text-gray-400 text-[13px] mb-8">{t('onlineConsultSub')}</p>
            <QuickConsultForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Header transparent />
      <HeroBanner />
      <AboutClinic />
      <ServicesShowcase />
      <StatsSection />
      <SignatureCases />
      <ConsultSection />
      <DoctorsSection />
      <VideoSection />
      <ReviewsSection />
      <InfoBoxes />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
