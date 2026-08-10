import type { Metadata } from "next";
import AdSense from "@/components/AdSense";
import CommunitySection from "@/components/CommunitySection";

export const metadata: Metadata = {
  title: "에브리타임 (Everytime) PC버전 무료 다운로드 및 시간표 사용법",
  description: "전국 대학생 필수 앱 에브리타임(Everytime) PC버전 데스크톱 웹뷰어 및 시간표 작성, 강의평가 활용법을 안내합니다.",
  keywords: "에브리타임, 에브리타임 PC, 에브리타임 PC버전, 에타 PC, 시간표 작성, 대학생 커뮤니티, 에브리타임 다운로드",
};

export default function EverytimePcDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Everytime Desktop",
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
      
      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-red-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0 shadow-lg">
          E
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">에브리타임 (Everytime) PC버전</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: 비누랩스 | 카테고리: 커뮤니티/생산성 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (400,000+ 리뷰)</span>
            <span>⬇️ 1,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#1d2027] rounded-3xl p-8 text-center border border-[#424754]/60 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">에브리타임 PC 웹뷰어 바로가기</h2>
        <p className="text-slate-300 mb-8">모바일 앱과 동일하게 PC 큰 화면에서 시간표 작성 및 강의평가를 확인하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://everytime.kr" target="_blank" rel="nofollow noopener" className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            에브리타임 PC 공식 웹사이트 바로가기
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-[#10131a] rounded-3xl p-8 shadow-sm border border-[#424754]/50 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">에브리타임 PC버전의 주요 기능</h2>
        <ul className="space-y-3 text-slate-300">
          <li><strong>초고속 시간표 마법사:</strong> 과목 코드 검색만으로 수강신청 전 시간표 조합을 실시간으로 구성합니다.</li>
          <li><strong>익명 캠퍼스 커뮤니티:</strong> 학교 인증을 거친 재학생 전용 익명 게시판 및 중고 서적 거래.</li>
          <li><strong>실시간 수강평 조회:</strong> 성적 성향, 꿀강좌 여부, 과제량 정보를 한눈에 파악합니다.</li>
        </ul>
      </section>

      <CommunitySection appId="everytime-pc" appName="에브리타임 (Everytime) PC버전" />
    </div>
  );
}
