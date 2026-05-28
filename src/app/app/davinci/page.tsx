import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "다빈치 리졸브 18 (DaVinci Resolve) 완전 무료버전 다운로드",
  description: "프리미어 프로 대안 1순위! 색보정의 끝판왕이자 워터마크, 시간 제한이 전혀 없는 완벽한 무료 영상 편집기 다빈치 리졸브 다운로드 가이드.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=blackmagicdesign.com&sz=128"
  }
};

export default function DavinciDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-purple-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          D
        </div>
        <div className="flex-1">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-3">할리우드급 무료 편집기</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">다빈치 리졸브 18 (무료)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Blackmagic Design | 카테고리: 영상 편집 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (크리에이터 추천 1위)</span>
            <span>⬇️ 1,500만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">워터마크 제로! 유튜버들의 최애 편집 프로그램</h2>
        <p className="text-slate-300 mb-8">매월 결제해야 하는 프리미어 프로가 부담되신다면, 할리우드에서 사용하는 색보정 최강자 다빈치 리졸브 무료버전을 다운받으세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.blackmagicdesign.com/kr/products/davinciresolve" target="_blank" rel="nofollow noopener" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            공식 홈페이지 무료버전 받기
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">스튜디오(유료) 말고 무조건 '무료버전' 받으세요!</h2>
        <p className="text-slate-300 leading-relaxed mb-6">다빈치 리졸브 다운로드 페이지에 들어가면 버튼이 두 개가 있어 헷갈리실 겁니다. <strong>DaVinci Resolve Studio</strong>는 수십만 원짜리 유료 버전이고, 일반 <strong>DaVinci Resolve</strong>가 워터마크 없는 평생 무료 버전입니다.</p>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>초보자 유튜버에게 충분한가요?</strong> 네! 유튜브 4K 영상 편집, 화려한 자막 작업, 컷편집 모두 유료버전과 동일하게 아무런 제약 없이 100% 무료로 가능합니다.</li>
          <li><strong>한국어 지원:</strong> 상단 메뉴 <code>DaVinci Resolve -&gt; Preferences -&gt; User -&gt; UI Settings</code>에서 Language를 한국어로 변경하면 완벽한 한글판으로 바뀝니다!</li>
        </ul>
      </section>
    </div>
  );
}
