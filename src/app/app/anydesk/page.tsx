import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "애니데스크 (AnyDesk) 한글판 PC 무료 다운로드 및 사용법",
  description: "팀뷰어 유료화 대안 1순위! 시간 제한 없이 완전히 무료로 사용할 수 있는 가벼운 원격 제어 프로그램 애니데스크 PC버전을 다운로드하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=anydesk.com&sz=128"
  }
};

export default function AnyDeskDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AnyDesk",
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
        <div className="w-24 h-24 bg-red-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          A
        </div>
        <div className="flex-1">
          <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">무료 원격 제어 1위</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">애니데스크 (AnyDesk)</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: AnyDesk Software | 카테고리: 원격 제어 | 라이선스: 무료 (개인용)</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 4.8 (팀뷰어 대용 최고)</span>
            <span>⬇️ 1,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">시간 제한 없는 완전 무료 원격 제어</h2>
        <p className="text-gray-600 mb-8">무거운 설치 없이 파일 하나만 실행하면 바로 원격 접속이 가능한 애니데스크를 다운받으세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://anydesk.com/ko/downloads/windows" target="_blank" rel="nofollow noopener" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows 용 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">팀뷰어(TeamViewer)의 완벽한 대체재</h2>
        <p className="text-gray-700 leading-relaxed mb-6">원격 제어를 하다가 <strong>"상업적 사용이 감지되었습니다"</strong>라는 메시지와 함께 접속이 끊겨 분노하신 적이 있나요? <code>애니데스크(AnyDesk)</code>는 개인 사용자에게 시간 제한 없이 완전 무료로 제공되며, 매우 가볍고 빠릅니다.</p>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 초간단 사용법 (무설치 지원)</h3>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li><strong>1. 실행하기:</strong> 다운받은 <code>AnyDesk.exe</code> 파일을 더블클릭합니다. (설치 없이 바로 실행됩니다.)</li>
          <li><strong>2. 내 주소 알려주기:</strong> 화면 상단에 보이는 9자리 숫자(내 워크스테이션 주소)를 상대방에게 알려주면 상대방이 내 PC로 들어올 수 있습니다.</li>
          <li><strong>3. 상대방 PC 접속하기:</strong> 상단 검색창에 상대방의 9자리 숫자를 입력하고 엔터를 치면 상대방 PC를 원격으로 제어할 수 있습니다.</li>
        </ul>
      </section>
    </div>
  );
}
