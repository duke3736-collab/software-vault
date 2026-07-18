import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "칼무리 (Kalmuri) 다운로드 | 초경량 무설치 무료 캡처 프로그램",
  description: "설치가 전혀 필요 없고 단 하나의 파일로 작동하는 대한민국 대표 초경량 화면 캡처 프로그램 칼무리(Kalmuri) 다운로드 및 상세 사용법, 유용한 단축키 팁을 안내합니다.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=gilgil.net&sz=128"
  }
};

export default function KalmuriDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "칼무리 (Kalmuri)",
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
        <div className="w-24 h-24 bg-yellow-500 text-slate-900 rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          K
        </div>
        <div className="flex-1">
          <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-3">초경량 무설치 | 100% 무료</div>
          <h1 className="text-3xl font-bold text-white mb-2">칼무리 (Kalmuri) 다운로드</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: 길길IT | 카테고리: 화면 캡처 | 라이선스: 프리웨어</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (미니멀리스트 강력 추천)</span>
            <span>⬇️ 150만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/60 rounded-3xl p-8 text-center border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">어디서든 즉시 실행되는 단일 캡처 툴</h2>
        <p className="text-slate-300 mb-8">
          단 1MB 미만의 가벼운 파일 크기! 하드디스크에 설치할 필요도 없어 레지스트리 찌꺼기를 남기지 않는 가장 가벼운 프리웨어 칼무리입니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://gilgil.net/" target="_blank" rel="nofollow noopener" className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            칼무리(Kalmuri) 공식 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4 mt-0">칼무리(Kalmuri)의 주요 특징 및 유용한 사용 꿀팁</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          칼무리는 오랜 세월 동안 개인, 공공기관, 기업을 가리지 않고 100% 무료로 사용할 수 있는 프리웨어로 큰 사랑을 받아왔습니다. 압도적으로 빠른 로딩 속도와 설치 파일이 아예 없는 깔끔함이 최고의 무기입니다.
        </p>
        
        <h3 className="text-xl font-bold text-white mb-4">🌟 주요 기능 안내</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li><strong>초경량 파일 구성:</strong> 설치형이 아닌 단 하나의 실행파일(<code>kalmuri.exe</code>)로만 작동하여 가볍고 안전함</li>
          <li><strong>다양한 캡처 영역:</strong> 화면 전체, 활성 프로그램, 윈도우 영역, 컴포넌트(메뉴, 단추 등) 영역, 마우스 커서 포함 설정 제공</li>
          <li><strong>웹페이지 전체 캡처:</strong> 웹사이트 주소를 직접 입력하면 브라우저 아래 보이지 않는 영역까지 스크롤하여 한 장으로 캡처</li>
          <li><strong>파일 포맷 및 자동 이름 지정:</strong> PNG, JPG, GIF, BMP 형식은 물론 클립보드 복사 전용 전송 기능 지원</li>
          <li><strong>색상 코드 추출:</strong> 마우스 포인터가 위치한 곳의 디자인 색상 코드를 1초 만에 확인</li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-4">⌨️ 알아두면 편리한 단축키 설정</h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          칼무리의 메인 영역에서 마우스 우클릭을 하면 매우 상세한 고급 설정 메뉴가 나타납니다.
        </p>
        <ul className="space-y-3 text-slate-300">
          <li><strong>단축키 변경:</strong> 기본 캡처 단축키는 <code>Print Screen</code>이며, <code>F11</code>이나 <code>Ctrl + Enter</code> 등 자신이 원하는 조합으로 쉽게 바꿀 수 있습니다.</li>
          <li><strong>연속 캡처 기능:</strong> 캡처 시마다 경고음이나 저장 확인 창 없이 지정된 경로에 순차적으로 파일명을 자동(예: 0001, 0002...) 생성하여 동영상 프레임 저장하듯 연속 촬영할 수 있습니다.</li>
        </ul>
      </section>
    </div>
  );
}
