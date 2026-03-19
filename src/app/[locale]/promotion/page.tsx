import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const PROMOTIONS = [
  {
    id: 47,
    title: 'SVF 뼈팔흡입',
    price: 140,
    image: '/images/promotion/promo_1_403.jpg',
    status: 'ongoing',
    desc: '안전하고 매끈한 대용량 SVF 뼈팔흡입',
    category: '지방흡입',
  },
  {
    id: 46,
    title: 'SVF딥플레인안면거상',
    price: 1300,
    image: '/images/promotion/promo_2_403.jpg',
    status: 'ongoing',
    desc: '더라인 시그니처 SVF딥플레인안면거상',
    category: '안면거상',
  },
  {
    id: 45,
    title: '복부 지방흡입',
    price: 210,
    image: '/images/promotion/promo_3_403.jpg',
    status: 'ongoing',
    desc: 'SVF 360 복부 지방흡입',
    category: '지방흡입',
  },
  {
    id: 44,
    title: '날개 팔거상',
    price: 300,
    image: '/images/promotion/promo_4_403.jpg',
    status: 'ongoing',
    desc: '처진 팔뚝 라인 교정 날개 팔거상',
    category: '거상',
  },
  {
    id: 43,
    title: 'SVF 허골승',
    price: 660,
    image: '/images/promotion/promo_5_403.jpg',
    status: 'ongoing',
    desc: '광대 축소 + 볼륨 업 SVF 허골승',
    category: '항노화',
  },
  {
    id: 42,
    title: '딥플레인안면거상',
    price: 1000,
    image: '/images/promotion/promo_6_403.jpg',
    status: 'ongoing',
    desc: '딥플레인 안면거상 특별 이벤트',
    category: '안면거상',
  },
  {
    id: 41,
    title: '허벅지거상',
    price: 600,
    image: '/images/promotion/promo_7_403.jpg',
    status: 'ongoing',
    desc: '매끄러운 허벅지 라인 허벅지거상',
    category: '거상',
  },
  {
    id: 40,
    title: '부위별 지방흡입',
    price: 140,
    image: '/images/promotion/promo_8_403.jpg',
    status: 'ongoing',
    desc: '부위별 맞춤 지방흡입 이벤트',
    category: '지방흡입',
  },
  {
    id: 39,
    title: '뼈팔·부유방 지방흡입',
    price: 200,
    image: '/images/promotion/promo_9_403.jpg',
    status: 'ongoing',
    desc: '뼈팔·부유방 지방흡입 세트 이벤트',
    category: '지방흡입',
  },
];

const CATEGORIES = ['전체', '지방흡입', '안면거상', '거상', '항노화'];

function PromotionContent() {
  const t = useTranslations('promotion');

  return (
    <>
      {/* Page header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#b8975a] text-sm font-semibold tracking-widest uppercase mb-2">Events</p>
          <h1 className="text-4xl font-bold mb-3">{t('title')}</h1>
          <p className="text-gray-400">{t('subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">총 {PROMOTIONS.length}건의 이벤트</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PROMOTIONS.map((item) => (
            <div key={item.id} className="group bg-white shadow hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                 
                />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-1 font-semibold ${
                    item.status === 'ongoing'
                      ? 'bg-[#b8975a] text-white'
                      : 'bg-gray-400 text-white'
                  }`}>
                    {item.status === 'ongoing' ? t('ongoing') : t('ended')}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-xs bg-[#1a1a2e]/80 text-white px-2 py-1">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 group-hover:text-[#b8975a] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#b8975a] font-bold">
                    {item.price.toLocaleString()}{t('won')}
                  </span>
                  <button className="text-xs border border-[#b8975a] text-[#b8975a] px-3 py-1 hover:bg-[#b8975a] hover:text-white transition-colors">
                    자세히
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-[#1a1a2e] text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">이벤트 및 비용 문의</h3>
          <p className="text-gray-400 mb-6">전문 상담사가 자세한 내용을 안내해 드립니다</p>
          <a
            href="tel:18990252"
            className="inline-block bg-[#b8975a] text-white px-10 py-4 font-bold text-lg hover:bg-[#9a7d47] transition-colors"
          >
            ☎ 1899-0252
          </a>
        </div>
      </div>
    </>
  );
}

export default function PromotionPage() {
  return (
    <main>
      <Header />
      <div className="pt-[105px]">
        <PromotionContent />
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
