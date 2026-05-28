import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "캡컷(CapCut) PC버전 무료 다운로드 (한글판) 및 설치",
  description: "유튜브, 틱톡, 숏츠 영상 편집의 1인자 캡컷(CapCut) PC버전 무료 다운로드. 워터마크 없이 프로급 영상을 쉽게 만들어 보세요.",
};

export default function CapcutPcDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CapCut PC",
    "operatingSystem": "Windows 10, Windows 11, macOS",
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
      
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-black text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          C
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CapCut (캡컷) PC버전</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: Bytedance | 카테고리: 동영상 편집 | 라이선스: 무료(Freemium)</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 4.7 (89,000+ 리뷰)</span>
            <span>⬇️ 1,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="header_ad" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">무료 영상편집 툴 1위 다운로드</h2>
        <p className="text-gray-600 mb-8">무거운 프리미어 프로 대신, 가볍고 템플릿이 쏟아지는 캡컷을 설치하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.capcut.com/ko-kr/tools/desktop-video-editor" target="_blank" rel="nofollow noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows 용 다운로드
          </a>
          <a href="https://www.capcut.com/ko-kr/tools/desktop-video-editor" target="_blank" rel="nofollow noopener" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
            Mac 용 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="download_bottom_ad" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">쇼츠, 릴스 편집은 무조건 캡컷 PC버전</h2>
        <p className="text-gray-700 leading-relaxed mb-6">스마트폰으로 편집하다가 손가락이 아프셨나요? 캡컷 PC버전은 넓은 화면에서 마우스와 키보드로 훨씬 빠르고 정교하게 숏폼 영상을 편집할 수 있게 해줍니다.</p>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">✨ 왜 캡컷을 써야 할까요?</h3>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li><strong>자동 자막 (Auto Captions):</strong> 사람의 목소리를 인식해서 단 1초 만에 영상 자막을 자동으로 깔아줍니다. (유튜버 필수 기능)</li>
          <li><strong>수만 개의 무료 효과음과 트랜지션:</strong> 저작권 걱정 없이 틱톡 최신 유행 음악과 화려한 화면 전환 효과를 마음껏 쓸 수 있습니다.</li>
          <li><strong>가벼운 구동:</strong> 프리미어 프로처럼 렉이 걸리지 않으며, 사양이 낮은 일반 사무용 노트북에서도 원활하게 돌아갑니다.</li>
        </ul>
      </section>
    </div>
  );
}
