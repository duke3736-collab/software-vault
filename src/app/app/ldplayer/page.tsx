import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "LD앱플레이어 (LDPlayer 9) PC버전 최신 무료 다운로드",
  description: "안드로이드 모바일 게임을 PC에서 120fps 고프레임으로 끊김 없이 구동하는 최강 앱플레이어 LDPlayer 9 공식 무료 다운로드.",
  keywords: "LDPlayer, LD앱플레이어, LDPlayer 9, 앱플레이어 추천, 모바일 게임 PC로 하기, LD플레이어 다운로드",
};

export default function LdPlayerDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LDPlayer 9",
    "operatingSystem": "Windows 7, 8, 10, 11",
    "applicationCategory": "GameApplication",
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
        <div className="w-24 h-24 bg-yellow-600 text-black rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          L
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">LD앱플레이어 (LDPlayer 9)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: XuanZhi | 카테고리: 게임/유틸리티 | 라이선스: 프리웨어</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.8 (110,000+ 리뷰)</span>
            <span>⬇️ 2,500만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">LDPlayer 9 공식 최신버전 다운로드</h2>
        <p className="text-slate-300 mb-8">안드로이드 9 커널 탑재로 고사양 3D 게임도 발열 걱정 없이 120fps로 즐기세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://kr.ldplayer.net" target="_blank" rel="nofollow noopener" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            LDPlayer 9 공식 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">LDPlayer 9의 주요 장점</h2>
        <ul className="space-y-3 text-slate-300">
          <li><strong>압도적인 FPS & 4K 지원:</strong> 게임 내 프레임을 최대 120fps까지 끌어올려 부드러운 조작감을 제공합니다.</li>
          <li><strong>멀티 매니저 지원:</strong> 여러 계정을 동시에 실행하여 멀티 리세마라 및 동시 구동이 가능합니다.</li>
          <li><strong>가벼운 그래픽 리소스:</strong> 그래픽카드 메모리 사용을 최적화하여 렉 현상을 극적으로 줄였습니다.</li>
        </ul>
      </section>

      <CommunitySection appId="ldplayer" appName="LD앱플레이어 (LDPlayer 9)" />
    </div>
  );
}
