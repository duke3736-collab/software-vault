import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "디스코드 (Discord) PC버전 무료 다운로드 및 마이크 오류 해결",
  description: "게이머들의 필수 음성 채팅 프로그램 디스코드(Discord) 다운로드. 마이크 안됨 현상 1분 만에 고치는 세팅 팁까지 정리했습니다.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=discord.com&sz=128"
  }
};

export default function DiscordDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-indigo-600 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          D
        </div>
        <div className="flex-1">
          <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-3">글로벌 음성 메신저</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">디스코드 (Discord)</h1>
          <p className="text-lg text-gray-600 mb-4">개발사: Discord Inc. | 카테고리: 음성/채팅 | 라이선스: 무료</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>⭐️ 4.9 (게이머 필수)</span>
            <span>⬇️ 1억 5천만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">끊김 없는 초고음질 음성/화상 채팅 프로그램</h2>
        <p className="text-gray-600 mb-8">롤(LoL), 발로란트, 배그 할 때 필수! 브라우저보다 훨씬 빠르고 가벼운 전용 PC 앱을 설치하세요.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://discord.com/download" target="_blank" rel="nofollow noopener" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Windows / Mac 무료 다운로드
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">내 목소리가 안 들린다? 마이크 오류 1분 해결법</h2>
        <p className="text-gray-700 leading-relaxed mb-6">디스코드를 처음 깔고 방에 들어갔는데 내 목소리가 팀원들에게 안 들리는 흔한 오류! 아주 쉽게 고칠 수 있습니다.</p>
        <ul className="space-y-3 mb-8 text-gray-700">
          <li><strong>설정 진입:</strong> 왼쪽 하단 내 닉네임 옆 <strong>[톱니바퀴 (사용자 설정)]</strong> 클릭</li>
          <li><strong>음성 및 비디오:</strong> 좌측 메뉴 중 [음성 및 비디오] 클릭</li>
          <li><strong>녹음 장치 변경:</strong> 최상단의 <code>녹음 장치</code>가 'Default'로 되어있다면, 이를 본인이 연결한 <strong>실제 마이크 이름(또는 Headset 등)</strong>으로 수동 선택해주세요.</li>
          <li><strong>입력 감도 조절:</strong> 입력 감도 바를 왼쪽으로 약간 밀어 초록색 불이 잘 들어오도록 셋팅하면 완벽합니다.</li>
        </ul>
      </section>
    </div>
  );
}
