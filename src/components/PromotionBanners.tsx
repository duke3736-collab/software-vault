'use client';

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
        href="https://saju.weknews.com" 
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

      {/* 4. 쿠팡 파트너스 배너 1 (맥북) */}
      <a 
        href="https://link.coupang.com/a/d7JKqbm5h6"
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-gray-800 text-white rounded-2xl p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 mt-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <h3 className="font-bold text-lg mb-1">새 프로그램은 쾌적한 환경에서! Apple 맥북 특가전</h3>
              <p className="text-gray-300 text-sm">크리에이터 필수품 맥북 에어/프로 쿠팡 로켓배송 최저가</p>
            </div>
          </div>
          <div className="bg-gray-700 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap hidden sm:block">
            맥북 보러가기 🍎
          </div>
        </div>
      </a>
      
      {/* 5. 쿠팡 파트너스 배너 2 (로지텍 마우스) */}
      <a 
        href="https://link.coupang.com/a/d7J0vxQAgK"
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-blue-50 text-blue-800 border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🖱️</span>
            <div>
              <h3 className="font-bold text-lg mb-1">국민 마우스 로지텍(Logitech) 무선 마우스 초특가</h3>
              <p className="text-blue-600 text-sm">사무용부터 게이밍까지, 손목이 편안한 마우스 로켓배송</p>
            </div>
          </div>
          <div className="bg-blue-100 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap hidden sm:block">
            마우스 구경하기 🚀
          </div>
        </div>
      </a>

      {/* 6. 쿠팡 파트너스 배너 3 (로지텍 키보드) */}
      <a 
        href="https://link.coupang.com/a/d7J2O96WUC"
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-red-50 text-red-800 border border-red-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⌨️</span>
            <div>
              <h3 className="font-bold text-lg mb-1">타건감 끝판왕 로지텍 기계식/사무용 키보드 특가</h3>
              <p className="text-red-600 text-sm">업무 효율 200% 상승! 인기 키보드 할인 기획전</p>
            </div>
          </div>
          <div className="bg-red-100 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap hidden sm:block">
            키보드 구경하기 🚀
          </div>
        </div>
      </a>
    </div>
  );
}
