import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "꿀뷰 (Honeyview) 무광고 초고속 이미지 뷰어 다운로드",
  description: "반디소프트의 초고속 무광고 뷰어 꿀뷰(Honeyview) 공식 다운로드. 압축파일(ZIP, RAR) 해제 없이 이미지 바로보기 팁을 제공합니다.",
  keywords: "꿀뷰, Honeyview, 꿀뷰 다운로드, 반디소프트 꿀뷰, 이미지 뷰어, 사진 뷰어 무광고, 압축 이미지 뷰어",
};

export default function HoneyviewDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Honeyview",
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
        <div className="w-24 h-24 bg-amber-500 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          H
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">꿀뷰 (Honeyview) 무광고 뷰어</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Bandisoft | 카테고리: 유틸리티 | 라이선스: 무료 (광고없음)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 5.0 (200,000+ 리뷰)</span>
            <span>⬇️ 4,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">꿀뷰 (Honeyview) 공식 최신버전 다운로드</h2>
        <p className="text-slate-300 mb-8">광고 없이 0.1초 만에 이미지를 여는 초고속 사진 뷰어입니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://kr.bandisoft.com/honeyview/" target="_blank" rel="nofollow noopener" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            꿀뷰 공식 설치파일 다운로드
          </a>
          <a href="https://kr.bandisoft.com/honeyview/" target="_blank" rel="nofollow noopener" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            무설치 포터블 버전 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">꿀뷰의 핵심 기능</h2>
        <ul className="space-y-3 text-slate-300">
          <li><strong>압축파일 해제 없이 보기:</strong> ZIP, RAR, 7Z 파일 속 사진을 압축 풀 필요 없이 더블클릭만으로 빠르게 봅니다.</li>
          <li><strong>WebP, PSD, RAW 포맷 지원:</strong> Photoshop 파일이나 카메라 RAW 사진도 딜레이 없이 렌더링합니다.</li>
          <li><strong>완전 무료 & 무광고:</strong> 개인 및 기업 사용자 누구나 무료로 사용 가능한 클린 툴입니다.</li>
        </ul>
      </section>

      <CommunitySection appId="honeyview" appName="꿀뷰 (Honeyview)" />
    </div>
  );
}
