import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "알캡처 구버전 (광고 없는 마지막 버전) 무료 다운로드",
  description: "최신 알캡처 우측 하단 팝업 광고 때문에 짜증나시나요? 광고가 아예 없는 알캡처 구버전(v2.xx) 무설치 다운로드 및 자동업데이트 끄기 방법을 안내합니다.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=altools.co.kr&sz=128"
  }
};

export default function AlcaptureOldDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "알캡처 구버전",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-teal-500 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          A
        </div>
        <div className="flex-1">
          <div className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full mb-3">광고 제로 (Ad-Free)</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">알캡처 구버전 (광고없음)</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: 이스트소프트 | 카테고리: 화면 캡처 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 4.9 (클린 버전)</span>
            <span>⬇️ 100만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">팝업 광고 없는 쾌적한 버전 다운로드</h2>
        <p className="text-gray-600 mb-8">지긋지긋한 알약, 알집 동반 설치와 우측 하단 광고 팝업이 일절 없는 가장 가벼운 구버전입니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://altools.co.kr/download/alcapture" target="_blank" rel="nofollow noopener" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            알캡처 구버전 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">구버전 유지 및 광고 완벽 차단 가이드</h2>
        <p className="text-gray-700 leading-relaxed mb-6">알캡처는 매우 훌륭한 프로그램이지만, 최근 버전업이 되면서 수익 창출을 위해 윈도우 우측 하단에 수시로 뉴스 팝업이나 쇼핑몰 광고를 띄우고 있습니다. <strong>구버전을 설치한 뒤 아래 설정</strong>을 반드시 해주셔야 쾌적하게 평생 무료로 쓰실 수 있습니다.</p>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">🛡️ 자동 업데이트 끄기 (필수)</h3>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li><strong>1. 기존 알캡처 삭제:</strong> 제어판에서 기존에 설치된 최신 알캡처를 깔끔하게 지워줍니다.</li>
          <li><strong>2. 구버전 설치:</strong> 위의 버튼을 눌러 다운받은 구버전을 설치할 때, 하단에 작게 체크되어 있는 <strong>'알집 추가 설치', '위메프/쿠팡 제휴 추가' 체크박스를 반드시 해제</strong>하세요.</li>
          <li><strong>3. 환경설정 진입:</strong> 설치 후 알캡처를 실행하고 <code>F4</code>키를 누르거나 메뉴에서 [환경설정]으로 들어갑니다.</li>
          <li><strong>4. 자동 업데이트 체크 해제:</strong> 설정 메뉴 중 [일반] 탭 하단에 있는 <strong>'자동 업데이트 실행' 또는 '업데이트 알림' 체크박스를 해제</strong>합니다. 이제 다시는 귀찮은 광고가 뜨지 않습니다!</li>
        </ul>
      </section>
    </div>
  );
}
