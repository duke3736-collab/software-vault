import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "픽픽 (PicPick) 공식 다운로드 | 올인원 화면 캡처 및 그래픽 도구",
  description: "개인 사용자에게 100% 무료로 제공되는 최강의 화면 캡처 프로그램 픽픽(PicPick) 다운로드. 이미지 에디터, 색상 추출기(스포이드), 화면 자, 돋보기까지 하나로 통합된 필수 소프트웨어입니다.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=picpick.app&sz=128"
  }
};

export default function PicPickDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "픽픽 (PicPick)",
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
        <div className="w-24 h-24 bg-sky-500 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          P
        </div>
        <div className="flex-1">
          <div className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3">개인 사용자 무료 | 올인원 그래픽 도구</div>
          <h1 className="text-3xl font-bold text-white mb-2">픽픽 (PicPick) 공식 설치</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: NGWIN | 카테고리: 화면 캡처 | 라이선스: 무료 (개인)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (전문가 추천)</span>
            <span>⬇️ 200만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/60 rounded-3xl p-8 text-center border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">화면 캡처와 편집을 하나의 프로그램에서 해결</h2>
        <p className="text-slate-300 mb-8">
          단순 캡처를 넘어 이미지 에디터, 색상 추출, 각도기, 화면 화이트보드 기능까지 내장된 글로벌 베스트셀러 캡처 앱 픽픽을 설치해보세요.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://picpick.app/ko/" target="_blank" rel="nofollow noopener" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            픽픽(PicPick) 공식 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4 mt-0">픽픽(PicPick)이 필수 프로그램으로 불리는 이유</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          보통 화면을 캡처한 뒤 포토샵이나 그림판을 열어 화살표를 그리고 글자를 넣는 번거로운 작업을 합니다. 픽픽은 강력한 <strong>자체 이미지 에디터를 기본 포함</strong>하고 있어, 캡처와 동시에 화살표 그리기, 빨간색 네모 박스 긋기, 모자이크 처리, 형광펜 칠하기 등을 1초 만에 끝낼 수 있습니다.
        </p>
        
        <h3 className="text-xl font-bold text-white mb-4">🎨 픽픽의 강력한 8가지 핵심 기능</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li><strong>다양한 화면 캡처:</strong> 전체 화면, 활성화된 윈도우, 영역 지정(자유 영역), 자동 스크롤 캡처 지원</li>
          <li><strong>내장 이미지 에디터:</strong> 자르기, 크기 조절, 모자이크(블러), 스탬프, 화살표, 텍스트 삽입 등 완벽 편집</li>
          <li><strong>화면 색상 추출기(스포이드):</strong> 웹서핑 중 마음에 드는 디자인의 색상 코드(HEX, RGB, HTML)를 픽셀 단위로 즉시 복사</li>
          <li><strong>화면 돋보기:</strong> 화면의 미세한 픽셀 경계선이나 텍스트를 최대 10배까지 확대하여 확인</li>
          <li><strong>화면 픽셀 자 (Pixel Ruler):</strong> 화면상에 있는 버튼이나 배너 이미지의 가로/세로 길이를 픽셀 단위로 정밀 측정</li>
          <li><strong>각도기:</strong> 화면에 표시된 디자인의 경사각 및 좌표 각도를 가상 각도기로 손쉽게 계산</li>
          <li><strong>화면 프레젠테이션 도구 (Whiteboard):</strong> 강의나 프리젠테이션 시 모니터 화면 위에 형광펜으로 직접 낙서 및 판서 가능</li>
          <li><strong>클라우드 자동 업로드:</strong> 캡처한 이미지를 드롭박스, 구글 드라이브, OneDrive로 자동 공유 및 URL 생성</li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-4">💡 추천 단축키 설정법</h3>
        <p className="text-slate-300 leading-relaxed">
          픽픽을 실행한 후 [옵션] -&gt; [단축키] 메뉴에서 자주 쓰는 동작을 커스텀해 보세요. 예를 들어, <code>Print Screen</code> 키를 누르면 <strong>[영역을 지정하여 캡처]</strong>가 되도록 지정하고, <code>Ctrl + Shift + Print Screen</code>을 <strong>[스크롤 캡처]</strong>로 지정해두면 마우스 조작 없이 폭발적인 업무 속도를 낼 수 있습니다.
        </p>
      </section>
    </div>
  );
}
