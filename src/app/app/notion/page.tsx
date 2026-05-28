import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "노션 (Notion) PC버전 무료 다운로드 및 한글 설정 가이드",
  description: "직장인과 대학생의 필수 생산성 앱 노션(Notion) PC버전을 무료로 다운로드하세요. 맥(Mac)과 윈도우(Windows) 완벽 지원.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=notion.so&sz=128"
  }
};

export default function NotionDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-gray-900 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          N
        </div>
        <div className="flex-1">
          <div className="inline-block bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded-full mb-3">압도적 1위 생산성 앱</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">노션 (Notion) PC 데스크톱</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: Notion Labs | 카테고리: 생산성/메모 | 라이선스: 무료 (개인용)</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 4.9 (대학생/직장인 필수)</span>
            <span>⬇️ 5,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹브라우저보다 2배 빠른 전용 앱 다운로드</h2>
        <p className="text-gray-600 mb-8">웹에서 매번 탭을 열어 쓰는 것보다, 전용 데스크톱 앱을 설치하면 알림과 단축키 등 훨씬 쾌적한 작업이 가능합니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.notion.so/desktop" target="_blank" rel="nofollow noopener" className="bg-gray-900 hover:bg-black text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows / Mac 무료 다운로드
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">노션 초기 세팅 완벽 가이드</h2>
        <p className="text-gray-700 leading-relaxed mb-6">처음 노션을 설치하고 영어로 나와서 당황하셨나요? 노션은 완벽한 한글을 지원합니다.</p>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li><strong>한글 변경 방법:</strong> 왼쪽 사이드바에서 <code>Settings & Members</code> 클릭 ➡️ <code>Language & region</code> 클릭 ➡️ 한국어(Korean)로 변경!</li>
          <li><strong>대학생 무료 꿀팁:</strong> 학교 이메일(<code>.ac.kr</code> 등)로 가입하면, 유료 기능인 '플러스 요금제' 혜택을 <strong>졸업할 때까지 완전 무료</strong>로 사용할 수 있습니다.</li>
        </ul>
      </section>
    </div>
  );
}
