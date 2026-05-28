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

      {/* Trending Apps Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">실시간 급상승 앱</h2>
          <button className="text-blue-600 font-medium hover:underline">모두 보기</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Link href={`/app/${app.id}`} key={app.id} className="block group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  {/* App Icon Mock */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-3xl shadow-sm ${app.iconColor} ${app.textColor}`}>
                    {app.iconText}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition line-clamp-1">{app.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{app.developer}</p>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {app.rating}
                      </span>
                      <span>리뷰 {app.reviews}</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full">{app.category}</span>
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
