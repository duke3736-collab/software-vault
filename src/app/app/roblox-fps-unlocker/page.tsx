import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "로블록스 FPS 언락커 최신버전 다운로드 (프레임 렉 해제)",
  description: "로블록스 60프레임 제한 때문에 화면이 끊기고 렉이 걸리시나요? Roblox FPS Unlocker를 다운받고 144Hz 240Hz 부드러운 화면으로 게임을 즐기세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=roblox.com&sz=128"
  }
};

export default function RobloxFpsUnlockerDownload() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Roblox FPS Unlocker",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "GameApplication",
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
        <div className="w-24 h-24 bg-gray-900 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          R
        </div>
        <div className="flex-1">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-3">프레임 드랍 완벽 해결</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">로블록스 FPS 언락커 (Unlocker)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: axstin | 카테고리: 게임 최적화 (오픈소스) | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (필수 애드온)</span>
            <span>⬇️ 800만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">60Hz 답답한 화면은 그만! 144Hz 이상 지원</h2>
        <p className="text-slate-300 mb-8">로블록스 자체의 60프레임 제한을 풀어주어, 좋은 모니터 성능을 100% 발휘하게 해주는 무설치(포터블) 프로그램입니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/axstin/rbxfpsunlocker/releases" target="_blank" rel="nofollow noopener" className="bg-gray-900 hover:bg-black text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            FPS Unlocker 깃허브 최신버전 다운로드
          </a>
        </div>
        
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">FPS 언락커 밴(정지) 당하지 않나요?</h2>
        <p className="text-slate-300 leading-relaxed mb-6">많은 유저들이 걱정하는 부분이지만, <strong>절대 정지(Ban)를 당하지 않습니다.</strong> 2019년에 로블록스 부사장(VP of Engineering)이 공식적으로 "FPS 언락커를 사용하는 것은 규정 위반이 아니며 정지하지 않는다"고 직접 오피셜 선언을 했기 때문에 안심하고 사용하셔도 됩니다.</p>
        
        <h3 className="text-xl font-bold text-white mb-4">🚀 초간단 1초 적용 방법</h3>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>1. 파일 다운로드:</strong> 위 버튼을 눌러 GitHub 사이트에서 <code>rbxfpsunlocker-x64.zip</code> 최신 파일을 다운로드 받습니다.</li>
          <li><strong>2. 압축 풀기:</strong> 바탕화면 등 원하는 곳에 폴더를 만들어 압축을 풉니다.</li>
          <li><strong>3. 실행하기:</strong> 로블록스를 켜기 전이나 게임 중에 <code>rbxfpsunlocker.exe</code> 파일을 더블클릭하여 실행하기만 하면 끝입니다.</li>
          <li><strong>4. 확인하기:</strong> 게임 안에서 <code>Shift + F5</code> 키를 눌러보면 프레임(FPS) 숫자가 60을 돌파하여 144, 240 등으로 미친듯이 올라가는 것을 확인할 수 있습니다! (부드러움 신세계)</li>
        </ul>
      </section>
    </div>
  );
}
