import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "한글(HWP) 뷰어 2024 무료 다운로드 및 설치",
  description: "관공서, 학교 서류 볼 때 필수! 결제 없이 무료로 HWP, HWPX 한글 파일을 열어보고 인쇄할 수 있는 한글과컴퓨터 공식 한글 뷰어를 다운로드하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=hancom.com&sz=128"
  }
};

export default function HwpViewerDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "한컴오피스 뷰어",
    "operatingSystem": "Windows 10, Windows 11, macOS",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-blue-500 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          ㅎ
        </div>
        <div className="flex-1">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">국민 필수 오피스 뷰어</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">한글(HWP) 뷰어 2024</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: 한글과컴퓨터 | 카테고리: 오피스/문서 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.6 (관공서 필수)</span>
            <span>⬇️ 3,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">HWP, HWPX 문서 완전 무료 열람 프로그램</h2>
        <p className="text-slate-300 mb-8">문서를 수정할 필요 없이 읽고 인쇄만 하실 거라면, 무거운 정품 대신 가볍고 무료인 한컴오피스 공식 뷰어를 사용하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.hancom.com/cs_center/csDownload.do" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows 용 뷰어 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">HWPX 파일이 안 열린다면?</h2>
        <p className="text-slate-300 leading-relaxed mb-6">최근 정부 기관과 관공서에서 기본 문서 형식을 <code>HWP</code>에서 개방형인 <code>HWPX</code>로 완전히 변경했습니다. 예전 구버전 한글 프로그램에서는 이 HWPX 파일이 열리지 않아 당황하시는 분들이 많습니다.</p>
        
        <h3 className="text-xl font-bold text-white mb-4">💡 해결 방법</h3>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li>새롭게 배포된 <strong>최신 한글(HWP) 뷰어 2024 버전</strong>을 설치하시면 HWP는 물론 최신 HWPX 파일까지 완벽하게 호환되어 깨짐 없이 열어볼 수 있습니다.</li>
          <li>설치 과정에서 <code>Daum을 시작페이지로 설정</code> 같은 광고성 체크박스가 있으니, 불필요하다면 꼭 해제하고 설치를 진행해 주세요.</li>
        </ul>
      </section>
    </div>
  );
}
