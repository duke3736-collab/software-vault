import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "반디집(Bandizip) 최신버전 무료 다운로드 - 알집 대체 1위",
  description: "알집의 무거운 광고와 팝업창이 지겨우신가요? 대한민국 압도적 1위의 초고속, 광고 없는 클린 압축 프로그램 반디집을 다운로드하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=bandisoft.com&sz=128"
  }
};

export default function BandizipDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-blue-500 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          B
        </div>
        <div className="flex-1">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">압도적 1위 압축 프로그램</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">반디집 (Bandizip)</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: Bandisoft | 카테고리: 유틸리티/압축 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 5.0 (국민 툴)</span>
            <span>⬇️ 3,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">가볍고 빠르고 광고 없는 압축의 신</h2>
        <p className="text-gray-600 mb-8">맥(Mac) 환경에서 만든 파일도 글자 깨짐 없이 완벽하게 풀어주는 멀티코어 초고속 압축 해제 프로그램입니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://kr.bandisoft.com/bandizip/" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            반디집 정식버전 다운로드
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">알집 대신 무조건 반디집을 써야 하는 이유</h2>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li><strong>초고속 압축 해제:</strong> 반디집은 컴퓨터의 모든 CPU 코어를 적극 활용하여 대용량 파일을 알집보다 몇 배 빠르게 압축 해제합니다.</li>
          <li><strong>글자 깨짐 방지:</strong> 아이맥, 맥북을 쓰는 사람이 보낸 압축파일을 풀면 <code>ㄱㅡㄹㅈㅏ</code> 처럼 자음과 모음이 분리되는 현상을 완벽하게 잡아줍니다.</li>
          <li><strong>무료 및 광고 제로:</strong> 일반 사용자는 완벽하게 무료로 사용할 수 있으며, '알약 동반 설치' 같은 짜증나는 유도 광고 팝업이 일절 없습니다.</li>
        </ul>
      </section>
    </div>
  );
}
