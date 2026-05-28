import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "반디캠(Bandicam) 무료버전 다운로드 및 워터마크 지우는 법",
  description: "인터넷 강의, 게임 화면을 부드럽게 고화질로 녹화하는 반디캠(Bandicam) 무료 다운로드. 10분 제한과 워터마크에 관한 꿀팁을 확인하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=bandicam.co.kr&sz=128"
  }
};

export default function BandicamDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-red-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          B
        </div>
        <div className="flex-1">
          <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">초경량 화면 녹화기</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">반디캠 (Bandicam) 무료버전</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Bandicam Company | 카테고리: 화면 녹화 | 라이선스: 무료 (기능제한)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.7 (인강 녹화 1위)</span>
            <span>⬇️ 1,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">렉 없이 부드러운 고화질 화면 캡처 프로그램</h2>
        <p className="text-slate-300 mb-8">OBS가 너무 무겁고 복잡하게 느껴지신다면, 버튼 하나로 즉시 녹화가 시작되는 가장 직관적인 반디캠을 추천합니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.bandicam.co.kr/downloads/" target="_blank" rel="nofollow noopener" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            반디캠 무료버전 다운로드
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">무료버전 제약사항과 대안 프로그램</h2>
        <p className="text-slate-300 leading-relaxed mb-6">반디캠은 성능이 뛰어나지만, 정품 라이선스를 구매하지 않은 '무료 버전'에서는 <strong>두 가지 치명적인 제약</strong>이 있습니다.</p>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>워터마크:</strong> 영상 상단 중앙에 <code>www.bandicam.com</code> 로고가 강제로 찍힙니다.</li>
          <li><strong>시간 제한:</strong> 한 번에 최대 10분까지만 녹화가 가능하며, 10분이 지나면 녹화가 강제 종료됩니다.</li>
        </ul>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-0 font-bold text-gray-800">💡 꿀팁: 시간 제한 없이 무료로 녹화하고 싶다면?</p>
          <p className="text-sm mt-1">우리 사이트에 등록되어 있는 <strong>[OBS 스튜디오]</strong>를 다운받으시면, 워터마크도 없고 시간 제한도 없이 평생 완전 무료로 고화질 화면 녹화가 가능합니다!</p>
        </div>
      </section>
    </div>
  );
}
