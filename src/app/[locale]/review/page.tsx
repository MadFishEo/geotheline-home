import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const REVIEWS = [
  { id: 403, title: '팔 리프팅 + 지방흡입 3개월 후기', category: '팔', date: '2025.02.15', num: '403' },
  { id: 402, title: '팔 지방흡입 + 리프팅 6개월 후기', category: '팔', date: '2025.02.10', num: '402' },
  { id: 401, title: '근육질 팔 지방흡입 성공 후기', category: '팔', date: '2025.01.28', num: '401' },
  { id: 400, title: '복부 지방흡입 1개월 후기', category: '복부', date: '2025.01.20', num: '400' },
  { id: 399, title: '1개월 후기 업데이트', category: '팔', date: '2025.01.15', num: '399' },
  { id: 398, title: '골반 지방이식 시술 후기', category: '허벅지', date: '2025.01.10', num: '398' },
  { id: 397, title: '팔 지방흡입 3개월차', category: '팔', date: '2024.12.28', num: '397' },
  { id: 396, title: '팔 지방흡입 흉터 최소화 후기', category: '팔', date: '2024.12.20', num: '396' },
  { id: 395, title: '승마살 지방흡입 최종 결과', category: '허벅지', date: '2024.12.15', num: '395' },
  { id: 394, title: '얼굴 지방흡입 + 볼 축소 후기', category: '얼굴', date: '2024.12.10', num: '394' },
  { id: 393, title: '팔 시술 3개월 후기', category: '팔', date: '2024.12.05', num: '393' },
  { id: 392, title: '복부 러브핸들 제거 1개월', category: '복부', date: '2024.12.01', num: '392' },
  { id: 391, title: '가슴 성형 1개월 후기', category: '가슴', date: '2024.11.28', num: '391' },
  { id: 390, title: '팔 시술 1개월 후기', category: '팔', date: '2024.11.20', num: '390' },
  { id: 389, title: '팔 지방흡입 1개월 업데이트', category: '팔', date: '2024.11.15', num: '389' },
  { id: 388, title: 'SVF 딥플레인 안면거상 후기', category: '얼굴', date: '2024.11.10', num: '388' },
];

const CATEGORIES = ['전체', '팔', '복부', '허벅지', '얼굴', '가슴', 'LAST'];

function ReviewContent() {
  const t = useTranslations('review');
  const th = useTranslations('home');

  return (
    <>
      {/* Page header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#b8975a] text-sm font-semibold tracking-widest uppercase mb-2">Patient Reviews</p>
          <h1 className="text-4xl font-bold mb-3">{t('title')}</h1>
          <p className="text-gray-400">{t('subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats & categories */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <p className="text-gray-600 font-medium">
            {t('total')} <span className="text-[#b8975a] font-bold">403</span>{t('count')}
          </p>

          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-sm border border-gray-200 hover:border-[#b8975a] hover:text-[#b8975a] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review) => (
            <div key={review.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-3">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e8d5b7] to-[#c8a87a]">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold opacity-30">#{review.num}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold text-sm">
                    자세히 보기
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-[#b8975a]/10 text-[#b8975a] px-2 py-0.5">{review.category}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#b8975a] transition-colors line-clamp-2">
                {review.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 text-sm font-medium transition-colors ${
                page === 1
                  ? 'bg-[#b8975a] text-white'
                  : 'border border-gray-200 text-gray-600 hover:border-[#b8975a] hover:text-[#b8975a]'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-10 h-10 text-sm border border-gray-200 text-gray-600 hover:border-[#b8975a] hover:text-[#b8975a]">
            →
          </button>
        </div>
      </div>
    </>
  );
}

export default function ReviewPage() {
  return (
    <main>
      <Header />
      <div className="pt-[105px]">
        <ReviewContent />
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
