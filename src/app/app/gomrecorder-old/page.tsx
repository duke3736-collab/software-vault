import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "곰녹음기 구버전 무료 다운로드 (광고 없는 마지막 버전)",
  description: "최신 곰녹음기의 광고와 무거운 실행 속도가 불편하시다면, 광고가 전혀 없고 가벼운 곰녹음기 구버전(v1.x / v2.x) 다운로드 및 자동 업데이트 끄기 방법을 안내해 드립니다.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=gomlab.com&sz=128"
  }
};

export default function GomRecorderOldDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "곰녹음기 구버전",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "MultimediaApplication",
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
        <div className="w-24 h-24 bg-orange-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          G
        </div>
        <div className="flex-1">
          <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-3">광고 제로 & 초경량</div>
          <h1 className="text-3xl font-bold text-white mb-2">곰녹음기 구버전 (가볍고 광고없음)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: 곰앤컴퍼니 | 카테고리: 녹음/오디오 | 라이선스: 프리웨어</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.8 (클린 에디션)</span>
            <span>⬇️ 50만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/60 rounded-3xl p-8 text-center border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">가장 쾌적하고 조용한 구버전 다운로드</h2>
        <p className="text-slate-300 mb-8">
          불필요한 브라우저 시작페이지 변경 유도나 광고 팝업이 없이 마이크 및 PC 사운드 녹음 본연의 기능에만 충실한 구버전 설치파일입니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.gomlab.com/" target="_blank" rel="nofollow noopener" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            곰녹음기 구버전 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4 mt-0">곰녹음기 구버전 설치 및 자동 업데이트 차단 가이드</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          최신 버전의 곰녹음기는 실행 시 각종 맞춤형 광고 팝업과 로그인 유도가 나타나며, 컴퓨터 메모리를 많이 차지하게 됩니다. 아래 가이드를 준수하여 구버전을 설치하고 설정하세요.
        </p>
        
        <h3 className="text-xl font-bold text-white mb-4">⚙️ 올바른 설치법 및 설정 순서</h3>
        <ol className="space-y-3 mb-8 text-slate-300">
          <li><strong>1. 기존 최신 버전 제거:</strong> 제어판 &gt; 프로그램 추가/제거에서 기존의 곰녹음기를 먼저 삭제한 뒤 컴퓨터를 재부팅합니다.</li>
          <li><strong>2. 구버전 설치:</strong> 다운로드 받은 구버전 설치 마법사를 실행합니다. 설치 도중 함께 나타날 수 있는 <strong>&apos;제휴 프로그램 설치(추가 제휴사 프로그램)&apos;나 &apos;시작페이지 변경&apos; 체크박스를 꼼꼼히 확인하고 반드시 해제</strong>합니다.</li>
          <li><strong>3. 자동 업데이트 기능 차단:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>곰녹음기를 실행하고, 메인 화면 우측 상단의 톱니바퀴 아이콘을 클릭하거나 단축키 <code>F5</code>를 눌러 <strong>[환경설정]</strong>으로 진입합니다.</li>
              <li>[기본] 또는 [업데이트] 탭을 찾습니다.</li>
              <li><strong>&apos;자동 업데이트&apos; 혹은 &apos;새 버전 확인&apos; 항목의 체크를 해제</strong>합니다.</li>
            </ul>
          </li>
          <li><strong>4. 윈도우 볼륨 믹서 확인:</strong> 녹음 시 컴퓨터 소리가 들리지 않거나 마이크 입력이 안 될 경우 윈도우 소리 설정에서 &apos;스테레오 믹스&apos; 장치가 켜져 있는지 확인하세요.</li>
        </ol>

        <h3 className="text-xl font-bold text-white mb-4">💡 곰녹음기 구버전의 주요 장점</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li><strong>단순한 직관성:</strong> 복잡한 계정 로그인 없이 실행 후 빨간색 녹음 버튼 하나로 오디오 저장 시작</li>
          <li><strong>저용량 고품질:</strong> 매우 가벼운 시스템 리소스 점유율로 구형 PC나 저사양 노트북에서도 끊김 없는 녹음 보장</li>
          <li><strong>다양한 포맷 지원:</strong> 녹음 완료와 동시에 MP3, WAV 형식의 고음질 파일로 바로 추출 및 파일명 커스텀 자동 설정</li>
          <li><strong>조용한 사용 환경:</strong> 메인 윈도우 스킨과 하단 영역에 노출되는 번잡한 배너 광고가 전혀 없어 쾌적함 극대화</li>
        </ul>
      </section>
    </div>
  );
}
