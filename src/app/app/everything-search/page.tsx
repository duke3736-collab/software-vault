import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "Everything 초고속 파일 검색 툴 무료 다운로드 및 사용법",
  description: "윈도우 기본 검색보다 100배 빠른 0.1초 파일 탐색 프로그램 Everything 공식 다운로드 및 직장인 필수 활용 가이드.",
  keywords: "Everything, 에브리띵 다운로드, 초고속 파일 검색, Everything 64bit, 윈도우 파일 찾기, voidtools",
};

export default function EverythingSearchDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Everything File Search",
    "operatingSystem": "Windows 7, 8, 10, 11",
    "applicationCategory": "UtilitiesApplication",
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
      
      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-emerald-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          E
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">Everything 초고속 파일 검색</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: voidtools | 카테고리: 유틸리티/생산성 | 라이선스: 프리웨어</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 5.0 (300,000+ 리뷰)</span>
            <span>⬇️ 5,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Everything 공식 다운로드 (voidtools)</h2>
        <p className="text-slate-300 mb-8">수백만 개의 파일 중에서 찾고자 하는 문서를 타이핑 즉시(0.1초) 검색해 냅니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.voidtools.com" target="_blank" rel="nofollow noopener" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Everything 64bit 공식 다운로드
          </a>
          <a href="https://www.voidtools.com" target="_blank" rel="nofollow noopener" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            무설치 포터블 (Portable)
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">왜 직장인 필수가 되었을까요?</h2>
        <p className="text-slate-300 leading-relaxed mb-6">윈도우 탐색기 검색은 몇 분씩 걸리고 시스템을 느리게 하지만, Everything은 NTFS 마스터 파일 테이블(MFT)을 직접 인덱싱하여 단 0.1초 만에 원하는 파일을 즉시 찾아줍니다. 프로그램 용량도 3MB 미만으로 대단히 가볍습니다.</p>
      </section>

      <CommunitySection appId="everything-search" appName="Everything 초고속 파일 검색" />
    </div>
  );
}
