import Link from "next/link";
import Image from "next/image";

const apps = [
  {
    id: "claude-pc",
    name: "Claude (클로드) PC버전",
    developer: "Anthropic",
    category: "AI 도구",
    rating: 4.9,
    reviews: "1.2만",
    iconColor: "bg-orange-100",
    iconText: "C",
    textColor: "text-orange-600",
  },
  {
    id: "chatgpt-pc",
    name: "ChatGPT 공식 데스크톱",
    developer: "OpenAI",
    category: "AI 도구",
    rating: 4.8,
    reviews: "5.4만",
    iconColor: "bg-green-100",
    iconText: "G",
    textColor: "text-green-600",
  },
  {
    id: "capcut-pc",
    name: "CapCut (캡컷) PC버전",
    developer: "Bytedance",
    category: "동영상 편집",
    rating: 4.7,
    reviews: "8.9만",
    iconColor: "bg-black",
    iconText: "C",
    textColor: "text-white",
  },
  {
    id: "logitech-g-hub",
    name: "로지텍 G HUB 구버전 (무한로딩 해결)",
    developer: "Logitech",
    category: "유틸리티",
    rating: 4.8,
    reviews: "1.5만",
    iconColor: "bg-blue-100",
    iconText: "G",
    textColor: "text-blue-600",
  },
  {
    id: "anysign4pc",
    name: "AnySign4PC 통합설치 (오류 해결)",
    developer: "한컴위드",
    category: "보안",
    rating: 2.1,
    reviews: "3.2만",
    iconColor: "bg-gray-100",
    iconText: "A",
    textColor: "text-gray-600",
  },
  {
    id: "3dp-net",
    name: "3DP Net (랜카드/포맷 필수)",
    developer: "3DP",
    category: "유틸리티",
    rating: 4.9,
    reviews: "2.1만",
    iconColor: "bg-green-100",
    iconText: "3",
    textColor: "text-green-600",
  },
  {
    id: "canon-scan",
    name: "캐논 복합기 스캔 유틸리티",
    developer: "Canon",
    category: "오피스",
    rating: 4.7,
    reviews: "1.1만",
    iconColor: "bg-red-100",
    iconText: "C",
    textColor: "text-red-600",
  },
  {
    id: "alcapture-old",
    name: "알캡처 구버전 (광고없음)",
    developer: "ESTsoft",
    category: "유틸리티",
    rating: 4.9,
    reviews: "4.5만",
    iconColor: "bg-teal-100",
    iconText: "A",
    textColor: "text-teal-700",
  },
  {
    id: "roblox-fps-unlocker",
    name: "로블록스 FPS 언락커",
    developer: "axstin",
    category: "게임 애드온",
    rating: 4.9,
    reviews: "8.2만",
    iconColor: "bg-purple-100",
    iconText: "R",
    textColor: "text-purple-700",
  },
  {
    id: "anydesk",
    name: "애니데스크 (AnyDesk)",
    developer: "AnyDesk Software",
    category: "원격 제어",
    rating: 4.8,
    reviews: "3.5만",
    iconColor: "bg-red-100",
    iconText: "A",
    textColor: "text-red-600",
  },
  {
    id: "teamviewer",
    name: "팀뷰어 (TeamViewer)",
    developer: "TeamViewer",
    category: "원격 제어",
    rating: 4.7,
    reviews: "12만",
    iconColor: "bg-blue-100",
    iconText: "T",
    textColor: "text-blue-600",
  },
  {
    id: "hwp-viewer",
    name: "한글(HWP) 뷰어 2024",
    developer: "한글과컴퓨터",
    category: "오피스",
    rating: 4.5,
    reviews: "9.8만",
    iconColor: "bg-blue-50",
    iconText: "H",
    textColor: "text-blue-800",
  },
  {
    id: "notion",
    name: "노션 (Notion) PC버전",
    developer: "Notion Labs",
    category: "생산성",
    rating: 4.9,
    reviews: "5.1만",
    iconColor: "bg-gray-100",
    iconText: "N",
    textColor: "text-gray-900",
  },
  {
    id: "bandizip",
    name: "반디집 (초고속 압축)",
    developer: "Bandisoft",
    category: "유틸리티",
    rating: 5.0,
    reviews: "6.2만",
    iconColor: "bg-blue-100",
    iconText: "B",
    textColor: "text-blue-700",
  },
  {
    id: "v3-lite",
    name: "안랩 V3 Lite (광고제거법)",
    developer: "AhnLab",
    category: "보안",
    rating: 4.7,
    reviews: "4.8만",
    iconColor: "bg-green-100",
    iconText: "V",
    textColor: "text-green-700",
  },
  {
    id: "davinci",
    name: "다빈치 리졸브 18 (무료)",
    developer: "Blackmagic Design",
    category: "동영상 편집",
    rating: 4.9,
    reviews: "3.9만",
    iconColor: "bg-purple-100",
    iconText: "D",
    textColor: "text-purple-700",
  },
  {
    id: "obs-studio",
    name: "OBS 스튜디오",
    developer: "OBS Project",
    category: "방송/녹화",
    rating: 4.9,
    reviews: "8.5만",
    iconColor: "bg-gray-200",
    iconText: "O",
    textColor: "text-gray-800",
  },
  {
    id: "autocad-student",
    name: "오토캐드 학생용 (3년 무료)",
    developer: "Autodesk",
    category: "설계",
    rating: 4.8,
    reviews: "2.3만",
    iconColor: "bg-red-100",
    iconText: "A",
    textColor: "text-red-700",
  },
  {
    id: "kakaotalk",
    name: "카카오톡 PC버전 (몰컴모드)",
    developer: "Kakao Corp",
    category: "메신저",
    rating: 4.8,
    reviews: "15만",
    iconColor: "bg-yellow-100",
    iconText: "K",
    textColor: "text-yellow-800",
  },
  {
    id: "discord",
    name: "디스코드 (마이크 오류해결)",
    developer: "Discord Inc.",
    category: "메신저",
    rating: 4.9,
    reviews: "11만",
    iconColor: "bg-indigo-100",
    iconText: "D",
    textColor: "text-indigo-700",
  },
  {
    id: "bandicam",
    name: "반디캠 (무료버전 제약)",
    developer: "Bandicam",
    category: "화면 녹화",
    rating: 4.7,
    reviews: "5.5만",
    iconColor: "bg-red-100",
    iconText: "B",
    textColor: "text-red-600",
  },
  {
    id: "chrome-offline",
    name: "크롬 오프라인 설치파일",
    developer: "Google",
    category: "브라우저",
    rating: 4.9,
    reviews: "9.2만",
    iconColor: "bg-yellow-100",
    iconText: "C",
    textColor: "text-yellow-700",
  },
  {
    id: "telegram-pc",
    name: "텔레그램 (Telegram) PC버전",
    developer: "Telegram FZ-LLC",
    category: "메신저",
    rating: 4.8,
    reviews: "8.1만",
    iconColor: "bg-sky-100",
    iconText: "T",
    textColor: "text-sky-600",
  },
  {
    id: "spotify-pc",
    name: "스포티파이 (Spotify)",
    developer: "Spotify AB",
    category: "음악",
    rating: 4.9,
    reviews: "9.5만",
    iconColor: "bg-green-100",
    iconText: "S",
    textColor: "text-green-600",
  },
  {
    id: "steam-client",
    name: "스팀 (Steam) 클라이언트",
    developer: "Valve Corporation",
    category: "게임 플랫폼",
    rating: 4.9,
    reviews: "20만",
    iconColor: "bg-slate-200",
    iconText: "S",
    textColor: "text-slate-800",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">이번 주 필수 추천 소프트웨어</h1>
          <p className="text-lg text-blue-100 mb-8">안전성이 검증된 공식 최신 버전의 PC 앱을 가장 빠르게 다운로드하세요.</p>
          <Link href="/app/claude-pc" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition">
            클로드 PC버전 다운로드 가기
          </Link>
        </div>
      </section>

      {/* DRIVE MAP BANNER */}
      <div className="pb-4">
        <a href="https://drive.weknews.com/" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group overflow-hidden relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-colors"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                <div className="flex items-center gap-4">
                    <span className="text-5xl group-hover:scale-110 transition-transform">🚗</span>
                    <div>
                        <h3 className="text-xl md:text-2xl font-black mb-1">답답할 땐? 전국 감성 드라이브 코스</h3>
                        <p className="text-orange-100 font-medium text-sm md:text-base">바다, 노을, 야경까지! 1초 만에 확인하는 인생 드라이브 코스 모음</p>
                    </div>
                </div>
                <span className="shrink-0 w-full md:w-auto text-center bg-white text-orange-600 font-black px-8 py-4 rounded-2xl shadow-md group-hover:bg-orange-50 transition-colors text-lg">
                    코스 보기 👉
                </span>
            </div>
        </a>
      </div>

      {/* Trending Apps Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">실시간 급상승 앱</h2>
          <button className="text-blue-600 font-medium hover:underline">모두 보기</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Link href={`/app/${app.id}`} key={app.id} className="block group">
              <div className="bg-slate-800/40 rounded-2xl p-6 shadow-sm border border-slate-700/50 hover:bg-slate-800 transition">
                <div className="flex items-start gap-4">
                  {/* App Icon Mock */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-3xl shadow-sm ${app.iconColor} ${app.textColor}`}>
                    {app.iconText}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition line-clamp-1">{app.name}</h3>
                    <p className="text-sm text-slate-400 mb-2">{app.developer}</p>
                    
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {app.rating}
                      </span>
                      <span>리뷰 {app.reviews}</span>
                      <span className="bg-slate-700 px-2 py-0.5 rounded-full whitespace-nowrap">{app.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
