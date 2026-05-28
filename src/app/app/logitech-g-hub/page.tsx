import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "로지텍 G HUB 구버전 다운로드 및 무한로딩 완벽 해결 방법",
  description: "로지텍 마우스 G HUB 신버전 무한로딩 오류 때문에 고생하시나요? 가장 안정적인 로지텍 G HUB 구버전 2021년도 다운로드 파일과 무한로딩 해결법을 확인하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=logitechg.com&sz=128"
  }
};

export default function LogitechGHubDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Logitech G HUB (구버전)",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          G
        </div>
        <div className="flex-1">
          <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">무한로딩 해결용 갓버전</div>
          <h1 className="text-3xl font-bold text-white mb-2">로지텍 G HUB 구버전 (2021.3)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Logitech | 카테고리: 하드웨어 유틸리티 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.8 (안정성 최고)</span>
            <span>⬇️ 50만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="header_ad" />
        </div>
      </section>

      <section className="bg-slate-800/60 rounded-3xl p-8 text-center border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">가장 안정적인 구버전 다운로드</h2>
        <p className="text-slate-300 mb-8">신버전의 치명적인 '무한 로딩' 버그가 없는 가장 안정적인 2021년 3월 버전을 다운로드하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://download01.logi.com/web/ftp/pub/techsupport/gaming/lghub_installer_2021.3.5164.exe" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            G HUB 2021.3 버전 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="download_bottom_ad" />
        </div>
      </section>

      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4 mt-0">로지텍 G HUB 무한로딩 완벽 해결법</h2>
        <p className="text-slate-300 leading-relaxed mb-6">컴퓨터를 켰는데 G HUB 로고만 빙글빙글 돌고 마우스 DPI가 안 맞아서 빡치신 경험, 로지텍 유저라면 누구나 한 번쯤 있을 겁니다. 최신 버전 업데이트 이후 발생하는 이 고질적인 버그는 <strong>구버전을 설치한 뒤 '자동 업데이트'를 끄는 것</strong>이 유일하고 완벽한 해결책입니다.</p>
        
        <h3 className="text-xl font-bold text-white mb-4">🛠️ 무한로딩 고치는 순서</h3>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>1단계 (완전 삭제):</strong> 제어판 - 프로그램 추가/제거에서 기존 G HUB를 삭제합니다. (찌꺼기 파일까지 완벽하게 지우는 것이 좋습니다.)</li>
          <li><strong>2단계 (구버전 설치):</strong> 위의 다운로드 버튼을 눌러 가장 안정적이라고 평가받는 <code>2021.3.5164</code> 버전을 설치합니다.</li>
          <li><strong>3단계 (자동 업데이트 끄기) 🚨중요:</strong> 설치가 완료되고 프로그램이 실행되면, 우측 상단의 '설정(톱니바퀴)'을 누르고 <strong>'자동 업데이트 활성화' 체크를 반드시 해제</strong>해야 합니다. 해제하지 않으면 컴퓨터 재부팅 시 다시 무한로딩 신버전으로 돌아갑니다.</li>
        </ul>
      </section>
    </div>
  );
}
