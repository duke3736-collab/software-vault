import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "팟플레이어 (PotPlayer) 64bit 공식 무료 다운로드 및 무광고 설정",
  description: "대한민국 1위 동영상 재생기 팟플레이어(PotPlayer) 64비트 최신버전 공식 다운로드와 자막 폰트 최적화, 무광고 설정법을 안내합니다.",
  keywords: "팟플레이어, PotPlayer, 팟플레이어 64bit, 팟플레이어 다운로드, 팟플레이어 구버전, 동영상 플레이어, 자막 깨짐",
};

export default function PotPlayerDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PotPlayer 64bit",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "MultimediaApplication",
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
        <div className="w-24 h-24 bg-[#FFB000] text-black rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          P
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">팟플레이어 (PotPlayer) 64bit</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Kakao Corp | 카테고리: 동영상/재생 | 라이선스: 프리웨어</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (150,000+ 리뷰)</span>
            <span>⬇️ 3,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">팟플레이어 64bit 공식 다운로드</h2>
        <p className="text-slate-300 mb-8">고화질 4K UHD, 60fps 동영상을 끊김 없이 부드럽게 재생하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://potplayer.daum.net" target="_blank" rel="nofollow noopener" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            64bit 공식 다운로드 (권장)
          </a>
          <a href="https://potplayer.daum.net" target="_blank" rel="nofollow noopener" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            32bit 버전 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">팟플레이어를 사용하는 이유</h2>
        <p className="text-slate-300 leading-relaxed mb-6">팟플레이어는 가벼운 리소스 점유율과 거의 모든 코덱을 내장하여 4K, 8K 비디오까지 부드럽게 재생하는 국내 최강의 비디오 재생 프로그램입니다.</p>
      </section>

      <CommunitySection appId="potplayer" appName="팟플레이어 (PotPlayer)" />
    </div>
  );
}
