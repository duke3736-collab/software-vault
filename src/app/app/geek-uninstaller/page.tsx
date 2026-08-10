import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "Geek Uninstaller 무설치 최신 무료 다운로드 (프로그램 강제 삭제)",
  description: "윈도우 지워지지 않는 프로그램 레지스트리와 남아있는 찌꺼기 폴더까지 깔끔하게 강제 제거하는 Geek Uninstaller 무설치 다운로드.",
  keywords: "Geek Uninstaller, 프로그램 강제 삭제, 안지워지는 프로그램 삭제, 지크 언인스톨러, 찌꺼기 폴더 삭제, 윈도우 정리",
};

export default function GeekUninstallerDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Geek Uninstaller",
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
        <div className="w-24 h-24 bg-cyan-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          G
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">Geek Uninstaller (무설치)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Thomas Koen | 카테고리: 유틸리티 | 라이선스: 무료 (포터블)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 5.0 (90,000+ 리뷰)</span>
            <span>⬇️ 1,500만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Geek Uninstaller 무설치 버전 다운로드</h2>
        <p className="text-slate-300 mb-8">설치 과정 없이 6MB 단일 파일로 찌꺼기 없는 완벽 삭제를 수행합니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://geekuninstaller.com" target="_blank" rel="nofollow noopener" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            Geek Uninstaller 무설치 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">왜 지크 언인스톨러인가?</h2>
        <ul className="space-y-3 text-slate-300">
          <li><strong>강제 제거 (Force Removal):</strong> 일반 윈도우 제어판에서 삭제 실패하는 프로그램도 레지스트리와 파일 트리를 강제로 스캔하여 삭제합니다.</li>
          <li><strong>Deep Scan 찌꺼기 정리:</strong> 언인스톨 후 남는 잔여 템포러리 파일과 레지스트리 항목을 1초 만에 깔끔히 비웁니다.</li>
          <li><strong>무설치 단일 실행 파일:</strong> 무겁지 않고 USB 메모리에 넣어 다닐 수 있습니다.</li>
        </ul>
      </section>

      <CommunitySection appId="geek-uninstaller" appName="Geek Uninstaller" />
    </div>
  );
}
