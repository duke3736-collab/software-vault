"use client";

import Link from "next/link";
import { useState } from "react";

const apps = [
  { id: "everytime-pc", name: "에브리타임 (Everytime) PC버전", developer: "Vinu Labs", category: "커뮤니티", rating: 4.9, reviews: "40만", iconColor: "bg-red-600", iconText: "E" },
  { id: "geek-uninstaller", name: "Geek Uninstaller (프로그램 완벽삭제)", developer: "Thomas Koen", category: "유틸리티", rating: 5.0, reviews: "9만", iconColor: "bg-cyan-600", iconText: "G" },
  { id: "winrar", name: "WinRAR (윈라) 64bit 최신 한글판", developer: "RARLAB", category: "유틸리티", rating: 4.9, reviews: "35만", iconColor: "bg-blue-700", iconText: "W" },
  { id: "notepad-plus-plus", name: "Notepad++ (노트패드++) 초고속 에디터", developer: "Don Ho", category: "생산성", rating: 5.0, reviews: "25만", iconColor: "bg-green-600", iconText: "N" },
  { id: "treesize-free", name: "TreeSize Free (SSD 용량 정리 툴)", developer: "JAM Software", category: "유틸리티", rating: 4.9, reviews: "7만", iconColor: "bg-teal-600", iconText: "T" },
  { id: "deepseek-pc", name: "DeepSeek (딥시크) AI PC버전", developer: "DeepSeek", category: "AI 도구", rating: 4.9, reviews: "8.5만", iconColor: "bg-blue-600", iconText: "D" },
  { id: "potplayer", name: "팟플레이어 (PotPlayer) 64bit 무광고", developer: "Kakao Corp", category: "동영상 재생", rating: 4.9, reviews: "15만", iconColor: "bg-amber-500", iconText: "P" },
  { id: "honeyview", name: "꿀뷰 (Honeyview) 초고속 사진뷰어", developer: "Bandisoft", category: "유틸리티", rating: 5.0, reviews: "20만", iconColor: "bg-yellow-500", iconText: "H" },
  { id: "everything-search", name: "Everything (0.1초 초고속 파일 검색)", developer: "voidtools", category: "생산성", rating: 5.0, reviews: "30만", iconColor: "bg-emerald-600", iconText: "E" },
  { id: "ldplayer", name: "LD앱플레이어 (LDPlayer 9) 120fps", developer: "XuanZhi", category: "게임 유틸리티", rating: 4.8, reviews: "11만", iconColor: "bg-yellow-600", iconText: "L" },
  { id: "claude-pc", name: "Claude (클로드) PC버전", developer: "Anthropic", category: "AI 도구", rating: 4.9, reviews: "1.2만", iconColor: "bg-orange-500", iconText: "C" },
  { id: "chatgpt-pc", name: "ChatGPT 공식 데스크톱", developer: "OpenAI", category: "AI 도구", rating: 4.8, reviews: "5.4만", iconColor: "bg-emerald-600", iconText: "G" },
  { id: "capcut-pc", name: "CapCut (캡컷) PC버전", developer: "Bytedance", category: "동영상 편집", rating: 4.7, reviews: "8.9만", iconColor: "bg-slate-900", iconText: "C" },
  { id: "logitech-g-hub", name: "로지텍 G HUB 구버전 (무한로딩 해결)", developer: "Logitech", category: "유틸리티", rating: 4.8, reviews: "1.5만", iconColor: "bg-blue-600", iconText: "G" },
  { id: "anysign4pc", name: "AnySign4PC 통합설치 (오류 해결)", developer: "한컴위드", category: "보안", rating: 2.1, reviews: "3.2만", iconColor: "bg-slate-600", iconText: "A" },
  { id: "3dp-net", name: "3DP Net (랜카드/포맷 필수)", developer: "3DP", category: "유틸리티", rating: 4.9, reviews: "2.1만", iconColor: "bg-green-600", iconText: "3" },
  { id: "canon-scan", name: "캐논 복합기 스캔 유틸리티", developer: "Canon", category: "오피스", rating: 4.7, reviews: "1.1만", iconColor: "bg-red-600", iconText: "C" },
  { id: "alcapture-old", name: "알캡처 구버전 (광고없음)", developer: "ESTsoft", category: "유틸리티", rating: 4.9, reviews: "4.5만", iconColor: "bg-teal-600", iconText: "A" },
  { id: "roblox-fps-unlocker", name: "로블록스 FPS 언락커", developer: "axstin", category: "게임 애드온", rating: 4.9, reviews: "8.2만", iconColor: "bg-purple-600", iconText: "R" },
  { id: "anydesk", name: "애니데스크 (AnyDesk)", developer: "AnyDesk Software", category: "원격 제어", rating: 4.8, reviews: "3.5만", iconColor: "bg-red-600", iconText: "A" },
  { id: "teamviewer", name: "팀뷰어 (TeamViewer)", developer: "TeamViewer", category: "원격 제어", rating: 4.7, reviews: "12만", iconColor: "bg-blue-700", iconText: "T" },
  { id: "hwp-viewer", name: "한글(HWP) 뷰어 2024", developer: "한글과컴퓨터", category: "오피스", rating: 4.5, reviews: "9.8만", iconColor: "bg-blue-800", iconText: "H" },
  { id: "notion", name: "노션 (Notion) PC버전", developer: "Notion Labs", category: "생산성", rating: 4.9, reviews: "5.1만", iconColor: "bg-stone-700", iconText: "N" },
  { id: "bandizip", name: "반디집 (초고속 압축)", developer: "Bandisoft", category: "유틸리티", rating: 5.0, reviews: "6.2만", iconColor: "bg-blue-600", iconText: "B" },
  { id: "v3-lite", name: "안랩 V3 Lite (광고제거법)", developer: "AhnLab", category: "보안", rating: 4.7, reviews: "4.8만", iconColor: "bg-green-700", iconText: "V" },
  { id: "davinci", name: "다빈치 리졸브 18 (무료)", developer: "Blackmagic Design", category: "동영상 편집", rating: 4.9, reviews: "3.9만", iconColor: "bg-purple-700", iconText: "D" },
  { id: "obs-studio", name: "OBS 스튜디오", developer: "OBS Project", category: "방송/녹화", rating: 4.9, reviews: "8.5만", iconColor: "bg-slate-700", iconText: "O" },
  { id: "autocad-student", name: "오토캐드 학생용 (3년 무료)", developer: "Autodesk", category: "설계", rating: 4.8, reviews: "2.3만", iconColor: "bg-red-700", iconText: "A" },
  { id: "kakaotalk", name: "카카오톡 PC버전 (몰컴모드)", developer: "Kakao Corp", category: "메신저", rating: 4.8, reviews: "15만", iconColor: "bg-yellow-500", iconText: "K" },
  { id: "discord", name: "디스코드 (마이크 오류해결)", developer: "Discord Inc.", category: "메신저", rating: 4.9, reviews: "11만", iconColor: "bg-indigo-600", iconText: "D" },
  { id: "bandicam", name: "반디캠 (무료버전 제약)", developer: "Bandicam", category: "화면 녹화", rating: 4.7, reviews: "5.5만", iconColor: "bg-red-600", iconText: "B" },
  { id: "chrome-offline", name: "크롬 오프라인 설치파일", developer: "Google", category: "브라우저", rating: 4.9, reviews: "9.2만", iconColor: "bg-yellow-500", iconText: "C" },
  { id: "ancamera-old", name: "안카메라 구버전 (무설치)", developer: "ancamera", category: "화면 캡처", rating: 4.7, reviews: "4.2만", iconColor: "bg-blue-500", iconText: "A" },
  { id: "picpick", name: "픽픽 (PicPick) 올인원 캡처", developer: "NGWIN", category: "화면 캡처", rating: 4.9, reviews: "5.8만", iconColor: "bg-sky-500", iconText: "P" },
  { id: "kalmuri", name: "칼무리 (Kalmuri) 초경량 캡처", developer: "길길IT", category: "화면 캡처", rating: 4.9, reviews: "3.7만", iconColor: "bg-yellow-500", iconText: "K" },
  { id: "notion-calendar", name: "노션 캘린더 (Notion Calendar)", developer: "Notion Labs", category: "생산성", rating: 4.8, reviews: "2.3만", iconColor: "bg-red-500", iconText: "N" },
  { id: "notion-templates", name: "프리미엄 노션 템플릿 모음", developer: "Weknews", category: "생산성", rating: 5.0, reviews: "1.2만", iconColor: "bg-stone-800", iconText: "T" },
  { id: "vscode", name: "Visual Studio Code (VS Code)", developer: "Microsoft", category: "개발자 도구", rating: 5.0, reviews: "21만", iconColor: "bg-blue-600", iconText: "V" },
  { id: "figma-pc", name: "피그마 (Figma) 데스크톱", developer: "Figma", category: "디자인", rating: 4.9, reviews: "9.5만", iconColor: "bg-purple-600", iconText: "F" },
  { id: "steam-launcher", name: "스팀 (Steam) 클라이언트", developer: "Valve", category: "게임 플랫폼", rating: 4.8, reviews: "50만+", iconColor: "bg-slate-800", iconText: "S" },
  { id: "zoom-pc", name: "줌 (Zoom) PC버전", developer: "Zoom", category: "화상회의", rating: 4.7, reviews: "18만", iconColor: "bg-blue-500", iconText: "Z" },
  { id: "spotify-pc", name: "스포티파이 (Spotify) PC버전", developer: "Spotify", category: "음악 재생", rating: 4.9, reviews: "22만", iconColor: "bg-green-500", iconText: "S" },
];

// 커뮤니티 데모 피드 데이터
const COMMUNITY_FEEDS = {
  free: [
    { avatar: "칼", avatarColor: "bg-violet-600", text: "칼무리 진짜 가볍고 최고임!", time: "2분 전" },
    { avatar: "행", avatarColor: "bg-blue-600", text: "이번 업데이트 대박이네요", time: "12분 전" },
    { avatar: "밴", avatarColor: "bg-emerald-600", text: "반디집 7zip보다 훨씬 편함", time: "25분 전" },
    { avatar: "디", avatarColor: "bg-indigo-600", text: "디스코드 마이크 오류 해결함 ㅋ", time: "1시간 전" },
    { avatar: "노", avatarColor: "bg-amber-600", text: "노션 팀플 협업 꿀이다", time: "2시간 전" },
  ],
  qa: [
    { avatar: "Q", avatarColor: "bg-rose-600", text: "Claude PC Mac에서 실행이 안 돼요 😢", time: "5분 전" },
    { avatar: "W", avatarColor: "bg-orange-600", text: "라이선스 키 인증 실패 뜨는데요", time: "18분 전" },
    { avatar: "Z", avatarColor: "bg-pink-600", text: "OBS 화질 설정 어떻게 해야 해요?", time: "35분 전" },
    { avatar: "S", avatarColor: "bg-teal-600", text: "팀뷰어 연결이 자꾸 끊겨요", time: "1시간 전" },
    { avatar: "M", avatarColor: "bg-cyan-600", text: "로지텍 HUB 무한로딩 해결됐나요?", time: "3시간 전" },
  ],
  error: [
    { avatar: "E", avatarColor: "bg-red-600", text: "윈도우 11 호환성 관련 질문이요", time: "10분 전" },
    { avatar: "V", avatarColor: "bg-slate-600", text: "V3 설치 후 느려졌어요", time: "30분 전" },
    { avatar: "A", avatarColor: "bg-purple-600", text: "AnyCover4PC 오류 뜨는 분?", time: "45분 전" },
    { avatar: "C", avatarColor: "bg-blue-700", text: "캡컷 실행 안 되는 분 계신가요", time: "2시간 전" },
    { avatar: "R", avatarColor: "bg-green-700", text: "랜카드 드라이버 설치 오류입니다", time: "4시간 전" },
  ],
  hot: [
    { avatar: "🔥", avatarColor: "bg-orange-600", text: "이번 달 필수 유틸리티 Top 10", time: "30분 전" },
    { avatar: "⭐", avatarColor: "bg-yellow-600", text: "무료 폰트 모음 최신버전", time: "1시간 전" },
    { avatar: "💎", avatarColor: "bg-blue-600", text: "백신 없이 윈도우 지키는 법", time: "2시간 전" },
    { avatar: "🚀", avatarColor: "bg-violet-600", text: "OBS 최적 설정 완벽 가이드", time: "3시간 전" },
    { avatar: "🎯", avatarColor: "bg-pink-600", text: "재설치 없이 시스템 최적화 팁", time: "5시간 전" },
  ],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-slate-200 text-xs font-semibold">{rating}</span>
    </div>
  );
}

type FeedItem = { avatar: string; avatarColor: string; text: string; time: string };

function FeedColumn({ title, items, href }: { title: string; items: FeedItem[]; href: string }) {
  return (
    <div className="bg-[#1d2027] rounded-2xl border border-[#424754]/40 overflow-hidden">
      {/* 컬럼 헤더 */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#424754]/30">
        <h3 className="text-sm font-bold text-[#e1e2ec]">{title}</h3>
        <Link href={href} className="text-xs text-[#adc6ff] hover:text-blue-300 transition-colors">전체 →</Link>
      </div>
      {/* 피드 아이템 */}
      <ul className="divide-y divide-[#424754]/20">
        {items.map((item, i) => (
          <li key={i} className="feed-item flex items-center gap-3 px-4 py-3 cursor-pointer">
            <div className={`w-8 h-8 ${item.avatarColor} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {item.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="feed-title text-[#c2c6d6] text-xs leading-snug truncate transition-colors">{item.text}</p>
              <p className="text-[#8c909f] text-[10px] mt-0.5">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">

      {/* ── HERO SECTION (Stitch 디자인) ── */}
      <section className="hero-gradient relative overflow-hidden rounded-3xl mx-4 mt-4 mb-16">
        {/* 배경 글로우 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-500/20 blur-3xl rounded-full" />
        
        <div className="relative z-10 px-8 py-16 md:py-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></span>
            이번 주 업데이트된 소프트웨어
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            이번 주 필수 추천<br className="hidden md:block" /> 소프트웨어
          </h1>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            엄선된 프리미엄 PC 소프트웨어를 한 곳에서 안전하게 만나보세요.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/app/claude-pc" className="bg-white text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5">
              지금 확인하기
            </Link>
            <Link href="/community" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition-all">
              💬 커뮤니티 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 space-y-16">

        {/* ── APP GRID (Stitch 디자인 카드) ── */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#e1e2ec]">🔥 실시간 급상승 앱</h2>
              <p className="text-sm text-[#8c909f] mt-1">유저들이 가장 많이 찾는 소프트웨어</p>
            </div>
            {/* 검색창 */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="소프트웨어 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1d2027] border border-[#424754]/60 text-[#e1e2ec] text-sm rounded-full px-4 py-2 pl-10 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <svg className="w-4 h-4 text-[#8c909f] absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredApps.length > 0 ? (
              filteredApps.map((app) => (
                <Link href={`/app/${app.id}`} key={app.id}>
                  <div className="app-card bg-[#1d2027] rounded-2xl p-5 border border-[#424754]/50 flex items-start gap-4 cursor-pointer">
                  {/* 앱 아이콘 */}
                  <div className={`w-14 h-14 ${app.iconColor} rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-sm shrink-0`}>
                    {app.iconText}
                  </div>
                  {/* 앱 정보 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#e1e2ec] text-sm leading-tight mb-1 line-clamp-2">{app.name}</h3>
                    <p className="text-[#8c909f] text-xs mb-2">{app.developer}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <StarRating rating={app.rating} />
                      <span className="text-[#8c909f] text-xs">리뷰 {app.reviews}</span>
                      <span className="text-[10px] font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {app.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-[#8c909f]">검색 결과가 없습니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── COMMUNITY HUB (이지데이 스타일 멀티컬럼) ── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#e1e2ec]">💬 실시간 커뮤니티</h2>
              <p className="text-sm text-[#8c909f] mt-1">로그인 없이 자유롭게 소통하는 익명 톡</p>
            </div>
            <Link href="/community" className="text-sm text-[#adc6ff] hover:text-blue-300 font-medium transition-colors border border-[#424754]/60 bg-[#1d2027] px-4 py-2 rounded-full">
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeedColumn title="🔥 자유톡" items={COMMUNITY_FEEDS.free} href="/community" />
            <FeedColumn title="💡 질문/해결" items={COMMUNITY_FEEDS.qa} href="/community" />
            <FeedColumn title="🛠️ 설치 오류" items={COMMUNITY_FEEDS.error} href="/community" />
            <FeedColumn title="⭐ 인기글" items={COMMUNITY_FEEDS.hot} href="/community" />
          </div>
        </section>

      </div>
    </div>
  );
}
