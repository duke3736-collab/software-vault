import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "OBS 스튜디오 (OBS Studio) 무료 다운로드 및 최적화 세팅",
  description: "유튜브, 트위치, 치지직 방송과 PC 화면 녹화를 위한 100% 무료 필수 오픈소스 프로그램 OBS 스튜디오를 다운로드하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=obsproject.com&sz=128"
  }
};

export default function ObsStudioDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-gray-800 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          O
        </div>
        <div className="flex-1">
          <div className="inline-block bg-gray-200 text-gray-800 text-xs font-bold px-3 py-1 rounded-full mb-3">방송 & 화면녹화 1위</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">OBS 스튜디오 (OBS Studio)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: OBS Project | 카테고리: 방송/녹화 | 라이선스: 무료 (오픈소스)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.9 (스트리머 필수)</span>
            <span>⬇️ 2,500만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">워터마크 없는 100% 완전 무료 화면 녹화/방송 툴</h2>
        <p className="text-slate-300 mb-8">인터넷 인강 녹화부터 고화질 4K 게임 게임 녹화, 유튜브 라이브 송출까지 이 프로그램 하나로 종결됩니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://obsproject.com/ko/download" target="_blank" rel="nofollow noopener" className="bg-gray-800 hover:bg-black text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows/Mac 공식 다운로드
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">녹화 화면이 까맣게(블랙스크린) 나오는 오류 해결법</h2>
        <p className="text-slate-300 leading-relaxed mb-6">노트북이나 듀얼 모니터 환경에서 OBS 스튜디오 화면 캡처가 안 되고 까맣게만 나오는 경우가 있습니다. 그래픽카드 충돌 때문인데 1분 만에 고칠 수 있습니다.</p>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>윈도우 설정 진입:</strong> 윈도우 [설정] -&gt; [시스템] -&gt; [디스플레이] 하단의 <strong>[그래픽 설정]</strong> 클릭</li>
          <li><strong>OBS 추가:</strong> 찾아보기 버튼을 눌러 <code>C:\Program Files\obs-studio\bin\64bit\obs64.exe</code> 파일을 선택해 목록에 추가합니다.</li>
          <li><strong>옵션 변경:</strong> 추가된 OBS를 클릭하고 [옵션]을 누른 뒤, <strong>'절전(내장 그래픽)'</strong>으로 변경하고 저장한 뒤 OBS를 껐다 켜면 화면이 정상적으로 나옵니다!</li>
        </ul>
      </section>
    </div>
  );
}
