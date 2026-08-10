'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredPosts, savePosts, PostItem } from '@/lib/postsStore';

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

const APP_NAME_MAP: Record<string, string> = {};
APP_CATEGORIES.forEach(c => c.apps.forEach(a => { APP_NAME_MAP[a.id] = a.name; }));

function getTimeAgo(dateStr: string): string {
  if (!dateStr) return '방금 전';
  const now = new Date();
  const then = new Date(dateStr.replace(/\./g, '-'));
  if (isNaN(then.getTime())) return dateStr;
  const diffMs = now.getTime() - then.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH}시간 전`;
  return dateStr.split(' ')[0] || dateStr;
}

const CATEGORY_BADGE: Record<string, string> = {
  '자유톡': 'text-sky-400 bg-sky-400/10 border border-sky-500/30',
  '익명톡': 'text-purple-400 bg-purple-400/10 border border-purple-500/30',
  '질문/해결': 'text-emerald-400 bg-emerald-400/10 border border-emerald-500/30',
  '설치 오류': 'text-rose-400 bg-rose-400/10 border border-rose-500/30',
  '육아톡': 'text-amber-400 bg-amber-400/10 border border-amber-500/30',
  '러브톡': 'text-pink-400 bg-pink-400/10 border border-pink-500/30',
};

export default function CommunityPage() {
  const [allPosts, setAllPosts] = useState<PostItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<'전체' | '자유톡' | '질문/해결' | '설치 오류' | '인기글'>('전체');
  const [activeApp, setActiveApp] = useState<string>('전체');

  useEffect(() => {
    setAllPosts(getStoredPosts());
  }, []);

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAllPosts(prev => {
      const updated = prev.map(p =>
        p.id === postId ? { ...p, likes: p.liked ? p.likes - 1 : p.likes + 1, liked: !p.liked } : p
      );
      savePosts(updated);
      return updated;
    });
  };

  // 필터 적용
  let filtered = allPosts;
  if (activeFilter === '인기글') filtered = allPosts.filter(p => p.likes >= 3 || p.views >= 50).sort((a, b) => b.likes - a.likes);
  else if (activeFilter !== '전체') filtered = allPosts.filter(p => p.category === activeFilter);
  if (activeApp !== '전체') filtered = filtered.filter(p => p.appId === activeApp);

  // 컬럼별 최신 글 (이지데이 멀티컬럼 스타일)
  const freePosts = allPosts.filter(p => p.category === '자유톡' || p.category === '익명톡').slice(0, 6);
  const qaPosts = allPosts.filter(p => p.category === '질문/해결').slice(0, 6);
  const errorPosts = allPosts.filter(p => p.category === '설치 오류').slice(0, 6);
  const hotPosts = [...allPosts].sort((a, b) => (b.likes + b.views) - (a.likes + a.views)).slice(0, 6);

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

        {/* 메인 타이틀 & 글쓰기 버튼 */}
        <div className="flex items-center justify-between bg-[#10131a] p-5 rounded-2xl border border-[#424754]/50 shadow-md">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>💬</span> 소프트웨어 커뮤니티
            </h1>
            <p className="text-sm text-slate-400 mt-1">로그인 없이 자유롭게 질문하고 링크와 정보를 나누세요.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/community/write"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-blue-500/25 transition transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>✏️</span> 새 글 쓰기
            </Link>
          </div>
        </div>

        {/* 필터가 '전체'이고 앱도 '전체'일 때 이지데이식 멀티컬럼 허브 */}
        {activeFilter === '전체' && activeApp === '전체' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: '☕ 자유톡 / 익명톡', posts: freePosts, color: 'text-sky-400' },
              { title: '❓ 질문 / 해결', posts: qaPosts, color: 'text-emerald-400' },
              { title: '⚠️ 설치 오류', posts: errorPosts, color: 'text-rose-400' },
              { title: '🔥 인기글', posts: hotPosts, color: 'text-orange-400' },
            ].map(col => (
              <div key={col.title} className="bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden shadow-md">
                {/* 컬럼 헤더 */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/40 bg-slate-900/30">
                  <span className={`text-sm font-bold ${col.color}`}>{col.title}</span>
                  <span className="text-xs text-slate-500">최신순</span>
                </div>
                {/* 글 목록 */}
                <ul className="divide-y divide-slate-700/20">
                  {col.posts.length === 0 ? (
                    <li className="px-4 py-6 text-center text-xs text-slate-600">아직 글이 없습니다.</li>
                  ) : col.posts.map(post => (
                    <li key={post.id}>
                      <Link
                        href={`/community/post/${post.id}`}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-slate-800/40 transition group"
                      >
                        <div className={`w-8 h-8 ${post.avatarColor || 'bg-blue-600'} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 shadow-sm`}>
                          {post.nickname ? post.nickname.charAt(0) : '익'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-200 group-hover:text-blue-400 transition line-clamp-1 mb-1">
                            {post.title || post.content}
                          </p>
                          <p className="text-xs text-slate-400 line-clamp-1 mb-1.5 font-normal">
                            {post.content}
                          </p>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500">
                            <span>{post.nickname}</span>
                            <span>·</span>
                            <span>{getTimeAgo(post.createdAt)}</span>
                            <span className="ml-auto font-mono">조회 {post.views || 1}</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* 컬럼 하단 */}
                <div className="px-4 py-2.5 border-t border-slate-700/30 bg-slate-900/20 text-right">
                  <button
                    onClick={() => setActiveFilter(col.title.includes('자유') ? '자유톡' : col.title.includes('질문') ? '질문/해결' : col.title.includes('오류') ? '설치 오류' : '인기글')}
                    className="text-xs text-slate-400 hover:text-white transition"
                  >
                    더보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 필터/앱 선택 시 단일 피드 뷰 */
          <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden shadow-lg">
            {/* 피드 헤더 */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-700/40 bg-slate-800/40">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {activeApp !== '전체' ? `📱 ${APP_NAME_MAP[activeApp] || activeApp} 톡` : `${activeFilter}`}
                </span>
                <span className="text-xs text-slate-500">({filtered.length}개)</span>
              </div>
              <button
                onClick={() => { setActiveFilter('전체'); setActiveApp('전체'); }}
                className="text-xs text-slate-400 hover:text-white transition"
              >
                ← 전체 허브로
              </button>
            </div>

            {/* 단일 피드 */}
            <div className="divide-y divide-slate-700/30 max-h-[800px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <p className="text-3xl mb-3">💬</p>
                  <p className="text-sm">아직 작성된 글이 없습니다.</p>
                  <Link href="/community/write" className="text-xs text-blue-400 hover:underline mt-2 inline-block font-semibold">
                    → 첫 글 쓰러가기
                  </Link>
                </div>
              ) : (
                filtered.map((post, i) => (
                  <article key={post.id} className="hover:bg-slate-800/30 transition group">
                    <Link href={`/community/post/${post.id}`} className="flex gap-4 px-5 py-4">
                      <span className="text-xs text-slate-600 font-mono shrink-0 mt-1 w-5 text-right">
                        {String(filtered.length - i).padStart(2, '0')}
                      </span>
                      <div className={`w-10 h-10 ${post.avatarColor || 'bg-blue-600'} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-sm`}>
                        {post.nickname ? post.nickname.charAt(0) : '익'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition">
                            {post.title || post.content}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${CATEGORY_BADGE[post.category] || 'bg-slate-700 text-slate-300'}`}>
                            {post.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-2">
                          {post.content}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span>{post.nickname}</span>
                          <span>·</span>
                          <span>{getTimeAgo(post.createdAt)}</span>
                          <span>·</span>
                          <span>조회 {post.views || 1}</span>
                          {post.comments && post.comments.length > 0 && (
                            <span className="text-blue-400">댓글 {post.comments.length}</span>
                          )}
                          <button
                            type="button"
                            onClick={(e) => handleLike(post.id, e)}
                            className={`ml-auto flex items-center gap-1 transition ${post.liked ? 'text-rose-400 font-bold' : 'hover:text-rose-400'}`}
                          >
                            ❤️ {post.likes || 0}
                          </button>
                        </div>
                      </div>
                    </Link>
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
