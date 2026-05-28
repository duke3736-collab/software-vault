import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "구글 크롬 (Chrome) 오프라인 스탠드얼론 설치파일 무료 다운로드",
  description: "인터넷 연결이 원활하지 않은 환경에서도 완벽하게 크롬 브라우저를 설치할 수 있는 오프라인(Standalone) 독립형 설치 파일을 다운로드하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=google.com&sz=128"
  }
};

export default function ChromeOfflineDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-yellow-500 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          C
        </div>
        <div className="flex-1">
          <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-3">독립형 설치 파일</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">구글 크롬 오프라인 설치파일</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: Google | 카테고리: 웹 브라우저 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 4.9 (포맷 필수템)</span>
            <span>⬇️ 1억+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">인터넷 없이 USB로 바로 설치하는 진짜 설치파일</h2>
        <p className="text-gray-600 mb-8">다운로드 중 멈춤 현상(무한 로딩)이 발생한다면 인터넷 연결이 필요 없는 100MB 크기의 오프라인 풀버전 패키지를 받으세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.google.com/intl/ko/chrome/?standalone=1" target="_blank" rel="nofollow noopener" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            크롬 오프라인(Standalone) 다운로드
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">일반 다운로드와 오프라인 버전의 차이점</h2>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li><strong>일반 다운로드 (ChromeSetup.exe):</strong> 용량이 2MB밖에 안 됩니다. 실행하면 그제서야 인터넷을 통해 진짜 파일들을 다운받아 설치합니다. (인터넷이 불안정하면 설치 중 에러 발생)</li>
          <li><strong>오프라인 다운로드 (Standalone):</strong> 용량이 약 100MB 정도 됩니다. 크롬을 구동하기 위한 모든 파일이 통째로 들어있어 <strong>USB에 담아서 인터넷이 아예 안 되는 컴퓨터에도 설치</strong>할 수 있습니다. 윈도우 포맷 전에 미리 받아두기 가장 좋은 파일입니다.</li>
        </ul>
      </section>
    </div>
  );
}
