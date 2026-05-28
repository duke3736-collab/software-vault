import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "캐논 복합기 스캔 유틸리티 (MF Scan Utility) 다운로드 및 사용법",
  description: "사무실 캐논 복합기로 스캔하는 법을 모르시겠다고요? 캐논 공식 MF Scan Utility 통합 다운로드와 스캐너 PC 연결 방법을 가장 쉽게 알려드립니다.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=canon.co.kr&sz=128"
  }
};

export default function CanonScanDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Canon MF Scan Utility",
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
        <div className="w-24 h-24 bg-red-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          C
        </div>
        <div className="flex-1">
          <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">사무실 필수 유틸리티</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">캐논 스캔 유틸리티 (MF Scan)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Canon | 카테고리: 업무용 소프트웨어 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.7 (직장인 강력 추천)</span>
            <span>⬇️ 500만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">캐논 스캐너 통합 프로그램 다이렉트 다운로드</h2>
        <p className="text-slate-300 mb-8">기종 모델명을 몰라도 괜찮습니다. 대부분의 캐논 복합기를 지원하는 통합 스캔 유틸리티를 바로 다운로드하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://kr.canon/support/printer" target="_blank" rel="nofollow noopener" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows용 스캔 프로그램 받기
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">PC에서 스캔 버튼이 안 눌리거나 파일을 못 찾을 때</h2>
        <p className="text-slate-300 leading-relaxed mb-6">"분명 프린터는 되는데 스캔은 어떻게 컴퓨터로 저장하지?" 사무실에서 캐논 복합기(IR ADV, MF 시리즈 등)를 쓸 때 누구나 한 번쯤 겪는 당황스러운 상황입니다. 공식 <strong>MF Scan Utility</strong>만 설치하면 클릭 한 번에 PDF로 스캔이 완료됩니다.</p>
        
        <h3 className="text-xl font-bold text-white mb-4">📄 1분 만에 스캔하는 방법 가이드</h3>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>1. 프로그램 설치:</strong> 다운로드 받은 설치 파일을 실행하여 설치를 완료합니다. (이때 프린터 전원이 켜져 있고, PC와 USB 혹은 같은 와이파이 망에 연결되어 있어야 합니다.)</li>
          <li><strong>2. 스캐너 선택:</strong> <code>MF Scan Utility</code>를 실행하고, 상단의 '제품 이름' 드롭다운 메뉴에서 사무실에 있는 캐논 복합기를 선택합니다.</li>
          <li><strong>3. 스캔 대상 올리기:</strong> 복합기 뚜껑을 열고 문서를 올리거나, 상단 급지대(ADF)에 여러 장의 서류를 올려둡니다.</li>
          <li><strong>4. 문서(PDF) 버튼 클릭:</strong> 프로그램 화면에서 <strong>[문서]</strong>라고 적힌 큰 아이콘을 클릭하면 징~ 소리와 함께 스캔이 시작되며, 스캔이 끝나면 <strong>[내 문서] 폴더</strong>에 자동으로 PDF 파일이 팝업창과 함께 나타납니다!</li>
        </ul>
      </section>
    </div>
  );
}
