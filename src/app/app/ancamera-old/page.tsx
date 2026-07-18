import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "안카메라 구버전 무료 다운로드 (로그인 없는 무설치 버전)",
  description: "로그인 의무화와 각종 광고 탑재로 무거워진 최신 안카메라 대신, 별도의 회원가입이나 설치 없이 바로 쓸 수 있는 안카메라 구버전(v3.x / v4.0) 무설치 포터블 다운로드 링크를 제공합니다.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=ancamera.co.kr&sz=128"
  }
};

export default function AncameraOldDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "안카메라 구버전",
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
        <div className="w-24 h-24 bg-blue-500 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          A
        </div>
        <div className="flex-1">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">무설치 & 로그인 불필요</div>
          <h1 className="text-3xl font-bold text-white mb-2">안카메라 구버전 (무설치 포터블)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: 안카메라 | 카테고리: 화면 캡처 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.7 (가장 깨끗한 버전)</span>
            <span>⬇️ 80만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/60 rounded-3xl p-8 text-center border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">가장 간결하고 광고 없는 캡처 환경</h2>
        <p className="text-slate-300 mb-8">
          회원 가입과 로그인, 복잡한 인스톨 과정 없이 즉시 실행 가능한 역사적인 캡처 명작 안카메라 구버전입니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.ancamera.co.kr/" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            안카메라 구버전 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4 mt-0">안카메라 구버전 사용 방법 및 팁</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          안카메라는 1990년대 후반부터 대한민국에서 널리 쓰여온 원조 캡처 소프트웨어입니다. 최신 안카메라는 이스트소프트의 제품들처럼 광고 탑재와 필수 회원 가입 및 자동 실행 등록으로 시스템을 느려지게 만듭니다. 구버전(v3.x 대의 단일 실행파일)은 이러한 제약이 전혀 없습니다.
        </p>
        
        <h3 className="text-xl font-bold text-white mb-4">🚀 주요 특징 및 장점</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li><strong>비로그인 작동:</strong> 계정 연동이나 이메일 인증 절차 없이 더블 클릭하는 순간 캡처 준비 완료</li>
          <li><strong>무설치 포터블:</strong> 설치 프로그램을 실행하여 레지스트리를 꼬이게 만들지 않고, <code>EXE</code> 파일 하나만 가지고 다니며 어디서나 사용 가능 (USB 저장장치 휴대용 최고)</li>
          <li><strong>조절식 투명창 캡처:</strong> 사각형 테두리를 늘려서 원하는 부위에 맞춘 뒤 캡처 버튼을 누르는 고유의 독창적 UI 제공</li>
          <li><strong>단축키 완벽 대응:</strong> 기본적으로 제공되는 단축키 커스텀을 통해 작업 효율 극대화</li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-4">🛡️ 구버전 실행 중 오류 발생 시 해결법</h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          안카메라 구버전은 오래전에 컴파일되었기 때문에 최신 Windows 10/11 보안이나 그래픽 환경에서 간혹 튕기거나 검은색 화면으로 찍히는 문제가 발생할 수 있습니다. 그럴 때는 아래와 같이 설정하세요.
        </p>
        <ul className="space-y-3 text-slate-300">
          <li><strong>1. 관리자 권한으로 실행:</strong> 안카메라 실행 파일 우클릭 -&gt; <strong>[관리자 권한으로 실행]</strong> 선택</li>
          <li><strong>2. 호환성 설정 변경:</strong> 실행 파일 우클릭 -&gt; [속성] -&gt; [호환성] 탭 -&gt; <strong>&apos;이 프로그램을 실행할 호환 모드&apos; 체크 후 Windows 7 선택</strong> 및 하단의 <strong>&apos;관리자 권한으로 이 프로그램 실행&apos;</strong> 체크 후 적용</li>
        </ul>
      </section>
    </div>
  );
}
