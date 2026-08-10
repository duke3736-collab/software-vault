'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 모든 앱 목록 - 카테고리별
const APP_CATEGORIES = [
  {
    category: 'AI 도구',
    emoji: '🤖',
    apps: [
      { id: 'claude-pc', name: 'Claude PC버전' },
      { id: 'chatgpt-pc', name: 'ChatGPT 데스크톱' },
    ],
  },
  {
    category: '화면 캡처',
    emoji: '📸',
    apps: [
      { id: 'kalmuri', name: '칼무리' },
      { id: 'ancamera-old', name: '안카메라 구버전' },
      { id: 'picpick', name: '픽픽(PicPick)' },
      { id: 'alcapture-old', name: '알캡처 구버전' },
    ],
  },
  {
    category: '유틸리티',
    emoji: '🔧',
    apps: [
      { id: 'bandizip', name: '반디집' },
      { id: '3dp-net', name: '3DP Net' },
      { id: 'logitech-g-hub', name: '로지텍 G HUB' },
    ],
  },
  {
    category: '동영상/녹화',
    emoji: '🎬',
    apps: [
      { id: 'capcut-pc', name: 'CapCut PC' },
      { id: 'davinci', name: '다빈치 리졸브' },
      { id: 'obs-studio', name: 'OBS 스튜디오' },
      { id: 'bandicam', name: '반디캠' },
    ],
  },
  {
    category: '메신저',
    emoji: '💬',
    apps: [
      { id: 'kakaotalk', name: '카카오톡 PC' },
      { id: 'discord', name: '디스코드' },
      { id: 'telegram-pc', name: '텔레그램' },
    ],
  },
  {
    category: '보안/오피스',
    emoji: '🛡️',
    apps: [
      { id: 'v3-lite', name: 'V3 Lite' },
      { id: 'hwp-viewer', name: '한글 뷰어' },
      { id: 'notion', name: '노션' },
    ],
  },
];

const ALL_APP_IDS = APP_CATEGORIES.flatMap(c => c.apps.map(a => a.id));
const APP_NAME_MAP: Record<string, string> = {};
APP_CATEGORIES.forEach(c => c.apps.forEach(a => { APP_NAME_MAP[a.id] = a.name; }));

const AVATAR_COLORS = [
  'bg-rose-500', 'bg-violet-500', 'bg-blue-500', 'bg-emerald-500',
  'bg-amber-500', 'bg-cyan-500', 'bg-fuchsia-500', 'bg-indigo-500',
];

interface Post {
  id: string;
  appId: string;
  nickname: string;
  avatarColor: string;
  category: '자유톡' | '질문/해결' | '설치 오류';
  content: string;
  passwordHash: string;
  createdAt: string;
  likes: number;
  liked: boolean;
}

function getTimeAgo(dateStr: string): string {
  const now = new Date();
  const then = new Date(dateStr);
  const diffMs = now.getTime() - then.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH}시간 전`;
  return then.toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
}

// 샘플 데모 글 (LocalStorage가 비어있을 때 보여줄 예시)
const DEMO_POSTS: Post[] = [
  {
    id: 'demo1', appId: 'kalmuri', nickname: '날렵한 개발자 312', avatarColor: 'bg-violet-500',
    category: '자유톡', content: '칼무리 진짜 오래 쓰고 있는데 아직도 최고임. 가볍고 빠르고 광고 없고.',
    passwordHash: '', createdAt: new Date(Date.now() - 3 * 60000).toISOString(), likes: 12, liked: false,
  },
  {
    id: 'demo2', appId: 'claude-pc', nickname: '행복한 맥북 781', avatarColor: 'bg-blue-500',
    category: '질문/해결', content: 'Claude PC버전 Mac에서 설치 후 실행이 안 되는 분 계신가요? 저만 그런건지... 😢',
    passwordHash: '', createdAt: new Date(Date.now() - 15 * 60000).toISOString(), likes: 5, liked: false,
  },
  {
    id: 'demo3', appId: 'bandizip', nickname: '똑똑한 사자 445', avatarColor: 'bg-emerald-500',
    category: '자유톡', content: '반디집 진짜 최고. 7zip보다 한글 파일명 처리가 훨씬 낫고 속도도 빠름.',
    passwordHash: '', createdAt: new Date(Date.now() - 40 * 60000).toISOString(), likes: 8, liked: false,
  },
  {
    id: 'demo4', appId: 'discord', nickname: '즐거운 너구리 927', avatarColor: 'bg-rose-500',
    category: '설치 오류', content: '디스코드 마이크 안 잡히는 분들, 설정>음성&영상에서 입력장치 수동으로 바꿔보세요. 저는 이걸로 해결했어요.',
    passwordHash: '', createdAt: new Date(Date.now() - 2 * 3600000).toISOString(), likes: 23, liked: false,
  },
  {
    id: 'demo5', appId: 'ancamera-old', nickname: '귀여운 호랑이 556', avatarColor: 'bg-amber-500',
    category: '자유톡', content: '안카메라 구버전 USB에 넣어다니면서 쓰는데 진짜 편함. 어디서든 꺼내서 바로 씀.',
    passwordHash: '', createdAt: new Date(Date.now() - 5 * 3600000).toISOString(), likes: 6, liked: false,
  },
  {
    id: 'demo6', appId: 'obs-studio', nickname: '신비로운 칼무리 103', avatarColor: 'bg-cyan-500',
    category: '질문/해결', content: 'OBS 처음 쓰는데 화질 설정 어떻게 하면 좋나요? 유튜브 업로드 기준으로요.',
    passwordHash: '', createdAt: new Date(Date.now() - 8 * 3600000).toISOString(), likes: 4, liked: false,
  },
];

const CATEGORY_BADGE: Record<string, string> = {
  '자유톡': 'text-sky-400 bg-sky-400/10 border border-sky-500/30',
  '질문/해결': 'text-emerald-400 bg-emerald-400/10 border border-emerald-500/30',
  '설치 오류': 'text-rose-400 bg-rose-400/10 border border-rose-500/30',
};

export default function CommunityPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [activeFilter, setActiveFilter] = useState<'전체' | '자유톡' | '질문/해결' | '설치 오류' | '인기글'>('전체');
  const [activeApp, setActiveApp] = useState<string>('전체');

  // 모든 앱의 LocalStorage에서 글 불러오기
  useEffect(() => {
    const loaded: Post[] = [];
    ALL_APP_IDS.forEach(id => {
      const raw = localStorage.getItem(`sv_community_posts_${id}`);
      if (raw) {
        try { loaded.push(...JSON.parse(raw)); } catch {}
      }
    });
    // 실제 글이 없으면 데모 글 표시
    setAllPosts(loaded.length > 0 ? loaded.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) : DEMO_POSTS);
  }, []);

  const handleLike = (postId: string) => {
    setAllPosts(prev => {
      const updated = prev.map(p =>
        p.id === postId ? { ...p, likes: p.liked ? p.likes - 1 : p.likes + 1, liked: !p.liked } : p
      );
      // LocalStorage도 업데이트
      ALL_APP_IDS.forEach(id => {
        const appPosts = updated.filter(p => p.appId === id);
        if (appPosts.length > 0) {
          localStorage.setItem(`sv_community_posts_${id}`, JSON.stringify(appPosts));
        }
      });
      return updated;
    });
  };

  // 필터 적용
  let filtered = allPosts;
  if (activeFilter === '인기글') filtered = allPosts.filter(p => p.likes >= 3).sort((a, b) => b.likes - a.likes);
  else if (activeFilter !== '전체') filtered = allPosts.filter(p => p.category === activeFilter);
  if (activeApp !== '전체') filtered = filtered.filter(p => p.appId === activeApp);

  // 컬럼별 최신 글 (이지데이 멀티컬럼 스타일)
  const freePosts = allPosts.filter(p => p.category === '자유톡').slice(0, 6);
  const qaPosts = allPosts.filter(p => p.category === '질문/해결').slice(0, 6);
  const errorPosts = allPosts.filter(p => p.category === '설치 오류').slice(0, 6);
  const hotPosts = [...allPosts].sort((a, b) => b.likes - a.likes).slice(0, 6);

  return (
    <div className="flex gap-6 min-h-screen">

      {/* ── 좌측 사이드바 (이지데이 카테고리 네비) ── */}
      <aside className="hidden lg:block w-48 shrink-0">
        <div className="sticky top-24 space-y-6">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">전체 보기</p>
            <nav className="space-y-0.5">
              {(['전체', '자유톡', '질문/해결', '설치 오류', '인기글'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => { setActiveFilter(tab); setActiveApp('전체'); }}
                  className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition ${
                    activeFilter === tab && activeApp === '전체'
                      ? 'bg-blue-600/20 text-blue-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {tab === '전체' && '🏠 '}
                  {tab === '자유톡' && '☕ '}
                  {tab === '질문/해결' && '❓ '}
                  {tab === '설치 오류' && '⚠️ '}
                  {tab === '인기글' && '🔥 '}
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {APP_CATEGORIES.map(cat => (
            <div key={cat.category}>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">
                {cat.emoji} {cat.category}
              </p>
              <nav className="space-y-0.5">
                {cat.apps.map(app => (
                  <button
                    key={app.id}
                    onClick={() => { setActiveApp(app.id); setActiveFilter('전체'); }}
                    className={`w-full text-left text-xs px-3 py-1.5 rounded-lg transition ${
                      activeApp === app.id
                        ? 'bg-blue-600/20 text-blue-400 font-semibold'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/40'
                    }`}
                  >
                    {app.name}
                  </button>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>

      {/* ── 메인 영역 ── */}
      <div className="flex-1 min-w-0 space-y-6">

        {/* 메인 타이틀 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">💬 소프트웨어 커뮤니티</h1>
            <p className="text-sm text-slate-400 mt-1">로그인 없이 자유롭게 질문하고 팁을 공유해 보세요.</p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50 px-3 py-1.5 rounded-full">
            총 {allPosts.length}개 글
          </span>
        </div>

        {/* 필터가 '전체'이고 앱도 '전체'일 때 이지데이식 멀티컬럼 허브 */}
        {activeFilter === '전체' && activeApp === '전체' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: '☕ 자유톡', posts: freePosts, color: 'text-sky-400', bg: 'bg-sky-400/10 border-sky-500/30' },
              { title: '❓ 질문/해결', posts: qaPosts, color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-500/30' },
              { title: '⚠️ 설치 오류', posts: errorPosts, color: 'text-rose-400', bg: 'bg-rose-400/10 border-rose-500/30' },
              { title: '🔥 인기글', posts: hotPosts, color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-500/30' },
            ].map(col => (
              <div key={col.title} className="bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden">
                {/* 컬럼 헤더 */}
                <div className={`flex items-center justify-between px-4 py-3 border-b border-slate-700/40`}>
                  <span className={`text-sm font-bold ${col.color}`}>{col.title}</span>
                  <span className="text-xs text-slate-500">최신순</span>
                </div>
                {/* 글 목록 */}
                <ul className="divide-y divide-slate-700/20">
                  {col.posts.length === 0 ? (
                    <li className="px-4 py-6 text-center text-xs text-slate-600">아직 글이 없습니다.</li>
                  ) : col.posts.map(post => (
                    <li key={post.id} className="flex items-start gap-3 px-4 py-3 hover:bg-slate-800/30 transition group">
                      <div className={`w-7 h-7 ${post.avatarColor} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5`}>
                        {post.nickname.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{post.content}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-xs text-slate-500">{post.nickname}</span>
                          <Link href={`/app/${post.appId}`} className="text-xs text-blue-500/70 hover:text-blue-400 transition">
                            [{APP_NAME_MAP[post.appId] || post.appId}]
                          </Link>
                          <span className="text-xs text-slate-600 ml-auto">{getTimeAgo(post.createdAt)}</span>
                          {post.likes > 0 && (
                            <span className="text-xs text-rose-400">❤️ {post.likes}</span>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* 컬럼 하단 */}
                <div className="px-4 py-2 border-t border-slate-700/30 bg-slate-900/20">
                  <button
                    onClick={() => setActiveFilter(col.title.split(' ')[1] as any)}
                    className="text-xs text-slate-500 hover:text-slate-300 transition"
                  >
                    전체 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 필터/앱 선택 시 단일 피드 뷰 */
          <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden">
            {/* 피드 헤더 */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700/40 bg-slate-800/40">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {activeApp !== '전체' ? `📱 ${APP_NAME_MAP[activeApp] || activeApp} 톡` : `${activeFilter}`}
                </span>
                <span className="text-xs text-slate-500">{filtered.length}개</span>
              </div>
              <button
                onClick={() => { setActiveFilter('전체'); setActiveApp('전체'); }}
                className="text-xs text-slate-500 hover:text-slate-300 transition"
              >
                ← 전체 허브로
              </button>
            </div>

            {/* 단일 피드 */}
            <div className="divide-y divide-slate-700/30 max-h-[800px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <p className="text-3xl mb-3">💬</p>
                  <p className="text-sm">아직 글이 없습니다. 첫 글을 남겨보세요!</p>
                  {activeApp !== '전체' && (
                    <Link href={`/app/${activeApp}`} className="text-xs text-blue-400 hover:underline mt-2 block">
                      → {APP_NAME_MAP[activeApp]} 페이지에서 글쓰기
                    </Link>
                  )}
                </div>
              ) : (
                filtered.map((post, i) => (
                  <article key={post.id} className="flex gap-3 px-5 py-4 hover:bg-slate-800/20 transition group">
                    <span className="text-xs text-slate-700 font-mono shrink-0 mt-1 w-5 text-right">{String(filtered.length - i).padStart(2, '0')}</span>
                    <div className={`w-9 h-9 ${post.avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                      {post.nickname.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm font-bold text-slate-200">{post.nickname}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${CATEGORY_BADGE[post.category]}`}>{post.category}</span>
                        <Link href={`/app/${post.appId}`} className="text-xs text-blue-500/60 hover:text-blue-400 transition">
                          [{APP_NAME_MAP[post.appId] || post.appId}]
                        </Link>
                        <span className="text-xs text-slate-500 ml-auto">{getTimeAgo(post.createdAt)}</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{post.content}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <button
                          type="button"
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-1 text-xs font-medium transition ${post.liked ? 'text-rose-400' : 'text-slate-500 hover:text-rose-400'}`}
                        >
                          <svg className="w-3.5 h-3.5" fill={post.liked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          공감 {post.likes > 0 && post.likes}
                        </button>
                        <Link href={`/app/${post.appId}`} className="text-xs text-slate-600 hover:text-blue-400 transition ml-auto opacity-0 group-hover:opacity-100">
                          앱 페이지 →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
