import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "ChatGPT (챗GPT) 공식 데스크톱 PC버전 무료 다운로드 및 설치",
  description: "OpenAI가 정식 출시한 ChatGPT 데스크톱 PC버전을 가장 빠르고 안전하게 다운로드하세요. 맥(Mac)과 윈도우(Windows) 최신 버전을 모두 제공합니다.",
};

export default function ChatGptPcDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ChatGPT Desktop",
    "operatingSystem": "Windows 11, Windows 10, macOS",
    "applicationCategory": "ProductivityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          G
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">ChatGPT (챗GPT) 데스크톱</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: OpenAI | 카테고리: AI 도구 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.8 (54,000+ 리뷰)</span>
            <span>⬇️ 500만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="header_ad" />
        </div>
      </section>

      <section className="bg-slate-800/60 rounded-3xl p-8 text-center border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">공식 데스크톱 최신버전 다운로드</h2>
        <p className="text-slate-300 mb-8">웹 브라우저 없이 바탕화면에서 바로 인공지능을 호출하세요. (단축키 지원)</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://openai.com/chatgpt/download/" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows 용 다운로드
          </a>
          <a href="https://openai.com/chatgpt/download/" target="_blank" rel="nofollow noopener" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
            Mac 용 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="download_bottom_ad" />
        </div>
      </section>

      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4 mt-0">더 빠르고 강력해진 챗GPT 데스크톱 앱</h2>
        <p className="text-slate-300 leading-relaxed mb-6">매번 크롬 브라우저를 열어 챗GPT 사이트에 접속하시나요? 이제 OpenAI가 정식으로 배포한 데스크톱 전용 앱을 설치하여 생산성을 극대화해 보세요.</p>
        
        <h3 className="text-xl font-bold text-white mb-4">✨ 데스크톱 버전만의 특별한 기능</h3>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>단축키(Option + Space) 빠른 호출:</strong> 맥 기준 단축키 한 번이면 화면 중앙에 투명한 챗GPT 검색창이 즉시 뜹니다.</li>
          <li><strong>음성 대화 (Voice Mode):</strong> 스마트폰 앱처럼 PC에서도 마이크를 통해 실시간 음성 대화가 가능합니다.</li>
          <li><strong>화면 캡처 연동:</strong> 현재 보고 있는 PC 화면을 즉시 캡처하여 AI에게 질문할 수 있습니다.</li>
        </ul>
      </section>
    </div>
  );
}
