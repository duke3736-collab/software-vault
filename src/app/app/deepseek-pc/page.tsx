import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "DeepSeek (딥시크) AI PC버전 데스크톱 무료 다운로드 및 사용법",
  description: "글로벌 폭발적 인기의 최신 DeepSeek (딥시크) AI PC버전 공식 프로그램 무료 다운로드 및 V3/R1 모델 데스크톱 활용법을 안내합니다.",
  keywords: "DeepSeek, 딥시크 PC, DeepSeek PC버전, 딥시크 다운로드, DeepSeek R1, 딥시크 사용법, 무료 AI",
};

export default function DeepSeekPcDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DeepSeek AI Desktop",
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
      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          D
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">DeepSeek (딥시크) AI PC버전</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: DeepSeek | 카테고리: AI 도구 | 라이선스: 무료 (오픈소스)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (85,000+ 리뷰)</span>
            <span>⬇️ 500만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">DeepSeek 공식 최신버전 바로가기 & 무설치 접속</h2>
        <p className="text-slate-300 mb-8">딥시크 V3 및 R1 추론 모델을 바탕화면에서 바로 실행하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://chat.deepseek.com" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            DeepSeek 웹 앱 무설치 실행 (공식)
          </a>
          <a href="https://github.com/deepseek-ai" target="_blank" rel="nofollow noopener" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub 오픈소스 모델 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">DeepSeek (딥시크) AI, 왜 지금 뜨고 있을까요?</h2>
        <p className="text-slate-300 leading-relaxed mb-6">DeepSeek는 높은 성능의 추론 능력과 압도적인 경제성으로 세계적인 주목을 받고 있는 최신 AI 모델입니다. 코드 생성, 수식 계산, 복잡한 논리 분석에서 챗GPT와 클로드 수준에 비견되는 강력한 성능을 보여줍니다.</p>
        
        <h3 className="text-xl font-bold text-white mb-4">✨ 핵심 특징 3가지</h3>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>DeepSeek-R1 추론 모델:</strong> 사람처럼 사고 과정을 차근차근 전개하여 고난도 수학, 코딩 문제를 정확히 풀어냅니다.</li>
          <li><strong>완전 무료 & 무제한 이용:</strong> 브라우저 및 앱에서 회원가입 후 무료로 사용이 가능합니다.</li>
          <li><strong>오픈소스 가중치 공개:</strong> 로컬 PC(Ollama, LM Studio 등)에 다운받아 인터넷 연결 없이 개인 서버로 실행할 수 있습니다.</li>
        </ul>
      </section>

      <CommunitySection appId="deepseek-pc" appName="DeepSeek (딥시크) AI" />
    </div>
  );
}
