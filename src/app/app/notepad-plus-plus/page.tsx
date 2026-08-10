import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "Notepad++ (노트패드++) 최신 한글판 무설치 다운로드",
  description: "윈도우 기본 메모장보다 100배 강력하고 초고속인 Notepad++(노트패드++) 공식 다운로드 및 구문 강조, 대용량 텍스트 편집 팁.",
  keywords: "Notepad++, 노트패드++, Notepad++ 다운로드, 노트패드플러스플러스, 텍스트 에디터, 무설치 노트패드",
};

export default function NotepadPlusPlusDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Notepad++",
    "operatingSystem": "Windows 7, 8, 10, 11",
    "applicationCategory": "DeveloperApplication",
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
        <div className="w-24 h-24 bg-green-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          N
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">Notepad++ (노트패드++)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Don Ho | 카테고리: 생산성/개발 | 라이선스: 오픈소스 (GPL)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 5.0 (250,000+ 리뷰)</span>
            <span>⬇️ 8,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Notepad++ 공식 다운로드</h2>
        <p className="text-slate-300 mb-8">대용량 텍스트 파일과 코드를 렉 없이 즉시 읽어들이는 경량 에디터입니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://notepad-plus-plus.org" target="_blank" rel="nofollow noopener" className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Notepad++ 64bit 공식 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">노트패드++의 독보적인 장점</h2>
        <ul className="space-y-3 text-slate-300">
          <li><strong>자동 저장 & 복구 기능:</strong> 저장하지 않고 창을 닫아도 다음 실행 시 작성 중이던 텍스트가 그대로 남아있습니다.</li>
          <li><strong>다중 정규식 찾기/바꾸기:</strong> 수천 줄의 텍스트에서 원하는 문구를 일괄 정규식 변경할 수 있습니다.</li>
          <li><strong>구문 강조 (Syntax Highlighting):</strong> HTML, Python, JS, JSON 등 다양한 언어 폰트 색상을 자동 구분합니다.</li>
        </ul>
      </section>

      <CommunitySection appId="notepad-plus-plus" appName="Notepad++ (노트패드++)" />
    </div>
  );
}
