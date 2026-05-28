import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "카카오톡 PC버전 무료 다운로드 및 듀얼 메신저 설정법",
  description: "국민 메신저 카카오톡 PC버전 윈도우/맥 다운로드. 직장인들을 위한 몰래 카톡하기 팁과 계정 2개 쓰는 듀얼 메신저 방법까지 확인하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128"
  }
};

export default function KakaotalkDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-yellow-400 text-gray-900 rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          K
        </div>
        <div className="flex-1">
          <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-3">국민 메신저</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">카카오톡 PC버전</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Kakao Corp | 카테고리: 메신저 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.8 (한국인 필수품)</span>
            <span>⬇️ 1억+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">대한민국 국민 필수 PC 메신저 다운로드</h2>
        <p className="text-slate-300 mb-8">모바일과 100% 동기화되는 카카오톡 PC버전을 지금 바로 다운로드하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.kakaocorp.com/page/service/service/KakaoTalk" target="_blank" rel="nofollow noopener" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            카카오톡 공식 다운로드
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">직장인을 위한 카카오톡 엑셀(몰컴) 모드 설정법</h2>
        <p className="text-slate-300 leading-relaxed mb-6">회사에서 대놓고 카카오톡을 띄워놓기 눈치 보이시나요? 카카오톡에는 배경과 글씨체를 엑셀 프로그램처럼 바꿔주는 기능이 내장되어 있습니다.</p>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>설정 진입:</strong> 왼쪽 하단의 톱니바퀴 -&gt; [설정] 클릭</li>
          <li><strong>화면 탭 이동:</strong> 왼쪽 메뉴에서 [화면] 탭 클릭</li>
          <li><strong>채팅방 스타일 변경:</strong> 엑셀 스타일 박스에 체크하고 투명도를 60% 정도로 조절하면 멀리서 보면 완벽한 엑셀 작업 화면처럼 보입니다!</li>
        </ul>
      </section>
    </div>
  );
}
