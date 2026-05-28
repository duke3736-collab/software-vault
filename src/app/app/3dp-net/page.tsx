import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "3DP Net / 3DP Chip 최신버전 다운로드 (포맷 필수품)",
  description: "컴퓨터 포맷 후 인터넷이 안 될 때 필수! 랜카드 드라이버 자동 설치 프로그램 3DP Net과 그래픽, 사운드 드라이버를 찾아주는 3DP Chip을 무료로 다운로드하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=3dpchip.com&sz=128"
  }
};

export default function ThreeDPNetDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "3DP Net",
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
        <div className="w-24 h-24 bg-green-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          3
        </div>
        <div className="flex-1">
          <div className="inline-block bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full mb-3">포맷 직후 1순위 필수템</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">3DP Net / 3DP Chip</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: 3DP | 카테고리: 하드웨어 드라이버 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (필수 유틸리티)</span>
            <span>⬇️ 2,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">인터넷 연결 없는 오프라인 설치 지원</h2>
        <p className="text-slate-300 mb-8">랜카드를 자동으로 인식하여 오프라인 상태에서도 인터넷을 연결해주는 3DP Net을 먼저 다운받아 USB에 담아두세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.3dpchip.com/3dp/net_down_kor.php" target="_blank" rel="nofollow noopener" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            3DP Net 다운로드 (랜카드)
          </a>
          <a href="https://www.3dpchip.com/3dp/chip_down_kor.php" target="_blank" rel="nofollow noopener" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
            3DP Chip 다운로드 (기타)
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">포맷 전 반드시 준비해야 할 파일 1순위</h2>
        <p className="text-slate-300 leading-relaxed mb-6">윈도우를 포맷하면 가장 흔하게 겪는 패닉이 바로 <strong>'인터넷 연결 안됨'</strong> 현상입니다. 메인보드의 랜(LAN)카드 드라이버가 없기 때문인데요. 인터넷이 안 되니 드라이버를 다운받을 수도 없는 악순환에 빠지게 됩니다.</p>
        
        <h3 className="text-xl font-bold text-white mb-4">💡 3DP 시리즈 사용 순서 완벽 가이드</h3>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>1. 3DP Net 미리 받기:</strong> 윈도우 포맷 전, 혹은 다른 PC나 스마트폰을 이용해 <code>3DP Net</code>을 다운받아 USB 메모리에 복사해 둡니다. (이 프로그램은 용량이 크지만 랜카드 드라이버를 모두 내장하고 있어 오프라인에서 설치 가능합니다.)</li>
          <li><strong>2. 3DP Net 설치 및 인터넷 연결:</strong> 포맷된 PC에 USB를 꽂고 3DP Net을 실행합니다. 화면에 뜨는 느낌표(!) 버튼을 클릭하면 랜카드가 잡히면서 인터넷이 연결됩니다.</li>
          <li><strong>3. 3DP Chip으로 나머지 해결:</strong> 인터넷이 연결되었다면, 이제 용량이 가벼운 <code>3DP Chip</code>을 다운받아 실행합니다. 느낌표가 떠 있는 그래픽 카드, 사운드 카드, 메인보드 칩셋을 하나씩 클릭하여 최신 드라이버로 업데이트하면 완벽하게 포맷 세팅이 끝납니다!</li>
        </ul>
      </section>
    </div>
  );
}
