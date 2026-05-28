import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "안랩 V3 Lite 무료 백신 다운로드 (광고 끄는 법 완벽 정리)",
  description: "내 PC를 지켜주는 국민 백신 안랩 V3 라이트(Lite) 최신버전 다운로드. 우측 하단에 뜨는 짜증나는 팝업 광고를 평생 끄는 설정법을 알려드립니다.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128"
  }
};

export default function V3LiteDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-green-500 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          V
        </div>
        <div className="flex-1">
          <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">국민 무료 백신</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">안랩 V3 Lite (무료)</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: AhnLab | 카테고리: PC 보안/백신 | 라이선스: 무료 (개인용)</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 4.7 (가장 가벼운 백신)</span>
            <span>⬇️ 4,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">가장 빠르고 강력한 랜섬웨어 차단 무료 백신</h2>
        <p className="text-gray-600 mb-8">PC 포맷 직후 무조건 1순위로 설치해야 하는 안랩 공식 무료 백신을 다운받으세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.ahnlab.com/kr/site/product/productView.do?prodSeq=8" target="_blank" rel="nofollow noopener" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            V3 Lite 정식 다운로드
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">🚨 V3 팝업 광고 영구적으로 끄는 완벽한 방법</h2>
        <p className="text-gray-700 leading-relaxed mb-6">무료로 제공되는 대신 윈도우 우측 하단에 수시로 쇼핑몰이나 뉴스 팝업 광고가 뜹니다. 아래 30초 설정만 따라하시면 평생 광고 없이 쾌적하게 쓸 수 있습니다!</p>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li><strong>1단계:</strong> V3 Lite 화면을 열고, 우측 상단의 <strong>[톱니바퀴 (설정)]</strong> 아이콘을 클릭합니다.</li>
          <li><strong>2단계:</strong> 설정 창 좌측 메뉴에서 <strong>[기타 설정] -> [사용 환경]</strong>으로 들어갑니다.</li>
          <li><strong>3단계:</strong> <code>알림 설정</code> 탭을 클릭하고, <strong>[30일간 광고 보지 않기]</strong> 박스에 체크합니다. (이후 매달 한 번씩 클릭해주면 영구 차단 효과가 있습니다.)</li>
          <li><strong>4단계:</strong> <code>스마트 백그라운드 스캔</code> 및 다른 모든 알림 체크박스를 해제해주면 윈도우 우측 하단이 평화로워집니다.</li>
        </ul>
      </section>
    </div>
  );
}
