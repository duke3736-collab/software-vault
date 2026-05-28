import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "Claude (클로드) PC버전 무료 다운로드 및 설치 방법 (최신)",
  description: "가장 똑똑한 AI 모델, 클로드(Claude) 공식 데스크톱 PC버전 무료 다운로드 링크와 설치 시 자주 발생하는 오류 해결 방법을 완벽 정리했습니다.",
};

export default function ClaudePcDownload() {
  // SEO용 스키마 마크업 (SoftwareApplication)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Claude Desktop",
    "operatingSystem": "Windows 10, Windows 11, macOS",
    "applicationCategory": "ProductivityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* App Header */}
      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          C
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">Claude (클로드) PC버전</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Anthropic | 카테고리: AI 도구 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (12,000+ 리뷰)</span>
            <span>⬇️ 100만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           {/* 상단 애드센스 (광고 1) */}
           <AdSense slot="header_ad" />
        </div>
      </section>

      {/* Download CTA Section (핵심 수익 영역) */}
      <section className="bg-slate-800/60 rounded-3xl p-8 text-center border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">안전한 공식 최신버전 다운로드</h2>
        <p className="text-slate-300 mb-8">운영체제에 맞는 버전을 선택하세요. 바이러스 검사를 통과한 공식 링크입니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://claude.ai/download" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows 용 (64bit)
          </a>
          <a href="https://claude.ai/download" target="_blank" rel="nofollow noopener" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
            Mac 용 (Apple Silicon)
          </a>
        </div>
        
        {/* 하단 애드센스 (광고 2 - 다운로드 버튼 밑 가장 클릭률 높은 곳) */}
        <div className="mt-8">
          <AdSense slot="download_bottom_ad" />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4 mt-0">클로드(Claude) PC버전, 왜 필수일까요?</h2>
        <p className="text-slate-300 leading-relaxed mb-6">최근 챗GPT를 뛰어넘는 코딩 능력과 문서 분석 능력으로 극찬받고 있는 Anthropic의 AI '클로드(Claude)'가 드디어 공식 데스크톱 버전을 출시했습니다. 웹 브라우저를 열 필요 없이 바탕화면에서 바로 실행하여 업무 효율을 200% 끌어올리세요.</p>
        
        <h3 className="text-xl font-bold text-white mb-4">✨ 주요 기능 3가지</h3>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>강력한 문서 첨부 (최대 5개):</strong> PDF, 엑셀, 워드 파일을 던져주면 순식간에 요약하고 핵심을 짚어줍니다.</li>
          <li><strong>압도적인 한국어 처리:</strong> 번역기 느낌이 전혀 없는, 사람보다 더 자연스러운 한국어 문장을 구사합니다.</li>
          <li><strong>아티팩트(Artifacts) 지원:</strong> 코드 작성 시 실시간으로 화면 우측에 웹사이트나 코드를 미리보기로 띄워줍니다.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-4">🛠️ PC버전 설치 방법 및 오류 해결 (FAQ)</h2>
        <div className="space-y-4 mt-6">
          <details className="group bg-slate-700/30 p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold text-white list-none flex justify-between items-center">
              Q. Windows 10에서도 설치가 되나요?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-300 leading-relaxed">네, Windows 10 이상 64비트 운영체제라면 모두 정상적으로 설치 및 실행됩니다.</p>
          </details>
          <details className="group bg-slate-700/30 p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold text-white list-none flex justify-between items-center">
              Q. 다운로드 후 실행이 안 됩니다 (백신 오류)
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-300 leading-relaxed">가끔 V3나 알약에서 알 수 없는 파일로 오진하는 경우가 있습니다. 공식 사이트에서 받은 파일이라면 안심하시고 백신의 '예외 설정'에 추가한 뒤 실행하시면 됩니다.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
