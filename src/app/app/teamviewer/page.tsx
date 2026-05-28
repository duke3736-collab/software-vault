import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "팀뷰어 (TeamViewer) 최신버전 PC 무료 다운로드",
  description: "전 세계 1위 원격 제어 프로그램 팀뷰어(TeamViewer) 다운로드. PC에서 PC로, 스마트폰에서 PC로 언제 어디서나 안전하고 빠르게 원격 접속하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=teamviewer.com&sz=128"
  }
};

export default function TeamViewerDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TeamViewer",
    "operatingSystem": "Windows 10, Windows 11, macOS",
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
        <div className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          T
        </div>
        <div className="flex-1">
          <div className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">압도적 1위 원격 제어</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">팀뷰어 (TeamViewer)</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: TeamViewer | 카테고리: 원격 제어 | 라이선스: 무료 (개인용)</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 4.7 (가장 유명한 원격 툴)</span>
            <span>⬇️ 20억+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">전 세계 표준 원격 제어 소프트웨어</h2>
        <p className="text-gray-600 mb-8">집에 있는 컴퓨터를 회사에서, 혹은 스마트폰으로 언제든지 제어할 수 있는 가장 강력한 프로그램을 다운받으세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.teamviewer.com/ko/download/windows/" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows 용 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">안전하고 강력한 기능</h2>
        <p className="text-gray-700 leading-relaxed mb-6">팀뷰어는 256비트 AES 암호화와 이중 인증을 지원하여 가장 안전한 원격 제어 환경을 제공합니다. <strong>파일 전송, 화면 녹화, 모바일 접속</strong> 등 막강한 기능을 개인 사용자에게는 무료로 제공하고 있습니다.</p>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 상업적 사용 의심 오류 해결 팁</h3>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li>개인용으로 쓰더라도 가끔 <code>상업적 사용이 의심됩니다</code>라며 접속이 끊기는 경우가 있습니다.</li>
          <li>이때는 팀뷰어 홈페이지의 고객지원 폼을 통해 <strong>'개인 용도 사용 승인(Reset Management)'</strong>을 요청하면 1~2일 내로 다시 무료로 풀리게 됩니다.</li>
          <li>너무 급한 경우, 앞서 추천해 드린 <code>애니데스크(AnyDesk)</code>를 대체재로 사용하시는 것도 좋은 방법입니다.</li>
        </ul>
      </section>
    </div>
  );
}
