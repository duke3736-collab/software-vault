'use client';

import AdBanner from "./AdBanner";

export default function PromotionBanners() {
  return (
    <div className="mt-16 mb-8 flex flex-col gap-4">
      {/* 1. 씨맵 (Sea-Map) */}
      <a 
        href="https://map.weknews.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-2xl p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">여름 피서지 주변 숙소 & 계곡 찾기 🏖️</h3>
            <p className="text-teal-50 text-sm">씨맵(Sea-Map)에서 전국 무료 물놀이터와 가성비 피서지를 한눈에 확인하세요!</p>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap hidden sm:block">
            씨맵 구경가기 🚀
          </div>
        </div>
      </a>

      {/* 2. 핀인사이트 */}
      <a 
        href="https://tools.weknews.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">엑셀보다 쉬운 금융 계산기 모음 📊</h3>
            <p className="text-indigo-50 text-sm">핀인사이트에서 복리, 대출, 예적금 이자를 1초 만에 계산해 보세요.</p>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap hidden sm:block">
            핀인사이트 방문 💰
          </div>
        </div>
      </a>

      {/* 3. 미스틱사주 */}
      <a 
        href="https://mystic.weknews.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white rounded-2xl p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">소름 돋게 정확한 AI 무료 타로/사주 🔮</h3>
            <p className="text-fuchsia-50 text-sm">여름휴가 전, 나의 애정운과 금전운을 미스틱사주에서 평생 무료로 확인하세요!</p>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap hidden sm:block">
            무료 운세 보기 ✨
          </div>
        </div>
      </a>

      {/* 4. 구글 애드센스 스폰서 배너 */}
      <div className="mt-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-xs">
        <p className="text-xs text-slate-500 font-bold mb-2">📢 SPONSORED</p>
        <AdBanner dataAdSlot="1273604121" dataAdFormat="auto" dataFullWidthResponsive={true} />
      </div>
    </div>
  );
}
