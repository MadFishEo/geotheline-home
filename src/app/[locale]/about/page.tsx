import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

function AboutContent() {
  const t = useTranslations('about');
  const dt = useTranslations('doctors');

  const doctors = [
    {
      key: 'jung' as const,
      img: '/images/doctors/doctor_1.jpg',
      years: 31,
      specialties: ['SVF 항노화', '안면거상', '지방흡입이식', '줄기세포 치료'],
    },
    {
      key: 'jo' as const,
      img: '/images/doctors/doctor_2.jpg',
      years: 30,
      specialties: ['SVF 지방', '줄기세포', '지방이식', '항노화'],
    },
    {
      key: 'kim' as const,
      img: '/images/doctors/doctor_3.jpg',
      years: 29,
      specialties: ['세포단위 정밀', 'SVF 치료', '항노화', '리프팅'],
    },
    {
      key: 'baek' as const,
      img: '/images/doctors/doctor_4.jpg',
      years: 0,
      specialties: ['가슴성형', '눈·코', '맞춤상담', '환자 소통'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#b8975a] text-sm font-semibold tracking-widest uppercase mb-2">About</p>
          <h1 className="text-4xl font-bold mb-3">{t('title')}</h1>
          <p className="text-gray-400">{t('subtitle')}</p>
        </div>
      </div>

      {/* Clinic intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#b8975a] text-sm font-semibold uppercase tracking-widest mb-3">더라인성형외과</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                줄기세포 기반<br />
                <span className="text-[#b8975a]">SVF 전문 의원</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                더라인성형외과는 서울 강남 신사동 가로수길에 위치한 줄기세포 기반 SVF(Stromal Vascular Fraction) 전문 의원입니다.
                자체 줄기세포 연구실을 운영하며, 과학적 근거에 기반한 안티에이징 및 체형 개선 솔루션을 제공합니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                4명의 전문 의료진이 직접 시술하며, 환자 개개인에 맞춤화된 치료 계획을 수립합니다.
                단순한 성형이 아닌, 세포 수준에서의 근본적인 변화를 추구합니다.
              </p>

              {/* Contact */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#b8975a] mt-0.5">📍</span>
                  <p className="text-gray-700">{t('address')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#b8975a]">🕐</span>
                  <p className="text-gray-700">{t('hours')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#b8975a]">📞</span>
                  <a href="tel:18990252" className="text-[#b8975a] font-bold text-lg">{t('phone')}</a>
                </div>
              </div>
            </div>

            {/* Floors */}
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-6">시설 안내</h3>
              <div className="space-y-4">
                {[
                  { floor: '6F', label: t('floors.6f'), icon: '🏥', color: 'border-[#1a1a2e]', bg: 'bg-[#1a1a2e]' },
                  { floor: '5F', label: t('floors.5f'), icon: '🔬', color: 'border-[#b8975a]', bg: 'bg-[#b8975a]' },
                  { floor: '4F', label: t('floors.4f'), icon: '💬', color: 'border-gray-300', bg: 'bg-gray-600' },
                ].map((fl) => (
                  <div key={fl.floor} className={`flex items-center gap-4 p-4 border-l-4 ${fl.color} bg-gray-50`}>
                    <div className={`${fl.bg} text-white w-12 h-12 flex items-center justify-center font-bold`}>
                      {fl.floor}
                    </div>
                    <div>
                      <span className="text-lg mr-2">{fl.icon}</span>
                      <span className="font-medium text-gray-800">{fl.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* International */}
              <div className="mt-6 p-4 bg-gray-50 rounded">
                <h4 className="font-semibold text-gray-800 mb-3">해외 문의</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>💬 LINE: thelinezx</p>
                  <p>💬 WeChat: thelinezx</p>
                  <p>📱 WhatsApp: +82 10 9848 0252</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#b8975a] text-sm font-semibold uppercase tracking-widest mb-2">Medical Team</p>
            <h2 className="text-3xl font-bold text-gray-900">의료진 소개</h2>
            <div className="w-16 h-0.5 bg-[#b8975a] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc) => (
              <div key={doc.key} className="bg-white overflow-hidden shadow group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={doc.img}
                    alt={dt(`${doc.key}.name`)}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                   
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {doc.years > 0 && (
                    <div className="absolute top-4 right-4 bg-[#b8975a] text-white text-center p-2 min-w-[52px]">
                      <div className="text-xl font-bold leading-none">{doc.years}</div>
                      <div className="text-xs">년</div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[#b8975a] text-xs uppercase font-semibold mb-1">{dt(`${doc.key}.title`)}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{dt(`${doc.key}.name`)}</h3>
                  <p className="text-gray-500 text-sm mb-4">{dt(`${doc.key}.career`)}</p>
                  <div className="flex flex-wrap gap-1">
                    {doc.specialties.map((s) => (
                      <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-1">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">오시는 길</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map placeholder */}
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-3">🗺️</div>
                <p className="font-medium">서울 강남구 신사동 가로수길 65</p>
                <p className="text-sm mt-1">동남빌딩 4, 5, 6층</p>
                <a
                  href="https://maps.google.com/?q=서울+강남구+신사동+가로수길+65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[#b8975a] font-medium hover:underline"
                >
                  Google Maps에서 보기 →
                </a>
              </div>
            </div>
            {/* Directions */}
            <div>
              <h3 className="font-bold text-lg mb-6">교통 안내</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#3d5a96] text-white text-xs px-2 py-1 font-bold">지하철</span>
                  </div>
                  <p className="text-gray-600 text-sm">3호선 신사역 8번 출구에서 도보 5분</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-700 text-white text-xs px-2 py-1 font-bold">버스</span>
                  </div>
                  <p className="text-gray-600 text-sm">신사동 가로수길 정류장 하차</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#b8975a] text-white text-xs px-2 py-1 font-bold">주차</span>
                  </div>
                  <p className="text-gray-600 text-sm">건물 지하 주차장 이용 가능 (1시간 무료)</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gray-50">
                <p className="text-sm font-medium text-gray-800 mb-2">진료 시간</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>평일: 09:30 ~ 18:30</p>
                  <p>토요일: 09:30 ~ 16:30</p>
                  <p className="text-red-500">일요일·공휴일 휴무</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="pt-[105px]">
        <AboutContent />
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
