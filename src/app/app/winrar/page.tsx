import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "WinRAR (윈라) 64bit 최신 한글판 무료 다운로드 및 압축 해제",
  description: "세계 1위 압축 프로그램 WinRAR (윈라) 64비트 최신 한글 공식 다운로드와 RAR, ZIP 분할 압축 및 암호 해제 방법 안내.",
  keywords: "WinRAR, 윈라, WinRAR 64bit, 윈라 다운로드, 윈라 한글판, RAR 압축 해제, 분할 압축",
};

export default function WinRarDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WinRAR 64bit Korean",
    "operatingSystem": "Windows 10, Windows 11",
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
        <div className="w-24 h-24 bg-blue-700 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          W
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">WinRAR (윈라) 64bit 한글판</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: RARLAB | 카테고리: 유틸리티 | 라이선스: 셰어웨어 (체험판)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (350,000+ 리뷰)</span>
            <span>⬇️ 1억+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">WinRAR 64bit 한글 공식 다운로드</h2>
        <p className="text-slate-300 mb-8">손상된 압축파일 복구 기능 및 압도적인 RAR5 압축 알고리즘 지원.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.win-rar.com" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            WinRAR 64bit 한글판 공식 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">WinRAR의 핵심 성능</h2>
        <ul className="space-y-3 text-slate-300">
          <li><strong>강력한 분할 압축:</strong> 대용량 게임이나 영상을 이메일/클라우드 용량에 맞춰 원하는 크기로 분할 압축합니다.</li>
          <li><strong>손상 복구 기능:</strong> 다운로드 도중 일부가 깨진 RAR 파일도 내장 복구 레코드로 재살려냅니다.</li>
          <li><strong>AES-256 비트 암호화:</strong> 기밀 문서 및 개인 정보 파일을 강력한 암호로 보호합니다.</li>
        </ul>
      </section>

      <CommunitySection appId="winrar" appName="WinRAR (윈라) 64bit" />
    </div>
  );
}
