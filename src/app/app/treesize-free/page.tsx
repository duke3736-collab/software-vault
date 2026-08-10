import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "TreeSize Free 무설치 다운로드 (SSD 하드 용량 정리/대용량 파일 찾기)",
  description: "C드라이브 용량 부족할 때 범인 파일을 0.1초 만에 시각적으로 찾아내 지워주는 TreeSize Free 공식 다운로드 및 사용법.",
  keywords: "TreeSize Free, 트라사이즈, C드라이브 용량 정리, SSD 용량 정리, 대용량 파일 찾기, 용량 분석 툴",
};

export default function TreeSizeFreeDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TreeSize Free",
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
        <div className="w-24 h-24 bg-teal-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          T
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">TreeSize Free (용량 정리)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: JAM Software | 카테고리: 유틸리티 | 라이선스: 프리웨어 (포터블)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (70,000+ 리뷰)</span>
            <span>⬇️ 1,200만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">TreeSize Free 공식 다운로드</h2>
        <p className="text-slate-300 mb-8">어떤 폴더가 하드디스크 용량을 먹고 있는지 트리 구조로 한눈에 보여줍니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.jam-software.com/treesize_free" target="_blank" rel="nofollow noopener" className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            TreeSize Free 공식 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">TreeSize Free 활용 팁</h2>
        <ul className="space-y-3 text-slate-300">
          <li><strong>용량순 트리 정렬:</strong> 가장 큰 용량을 차지하는 폴더를 상단부터 차례대로 시각화합니다.</li>
          <li><strong>숨김 파일/템포러리 감지:</strong> 윈도우 기본 탐색기에서 보이지 않는 숨김 임시 파일까지 감지해 냅니다.</li>
          <li><strong>즉시 우클릭 삭제:</strong> 스캔 결과 창에서 바로 불필요한 대용량 동영상이나 찌꺼기 파일을 지울 수 있습니다.</li>
        </ul>
      </section>

      <CommunitySection appId="treesize-free" appName="TreeSize Free" />
    </div>
  );
}
