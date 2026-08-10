'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getStoredPosts, addPost, PostItem, savePosts } from '@/lib/postsStore';

interface CommunitySectionProps {
  appId: string;
  appName: string;
}

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

export default function CommunitySection({ appId, appName }: CommunitySectionProps) {
  const router = useRouter();
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [activeTab, setActiveTab] = useState<'전체' | '자유톡' | '질문/해결' | '설치 오류'>('전체');

  useEffect(() => {
    const all = getStoredPosts();
    const filteredApp = all.filter(p => p.appId === appId || p.appId === 'general');
    setPosts(filteredApp);
  }, [appId]);

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPosts(prev => {
      const updated = prev.map(p =>
        p.id === postId ? { ...p, likes: p.liked ? p.likes - 1 : p.likes + 1, liked: !p.liked } : p
      );
      savePosts(updated);
      return updated;
    });
  };

  const filtered = activeTab === '전체' ? posts : posts.filter(p => p.category === activeTab);

  const categoryBadge: Record<string, string> = {
    '자유톡': 'text-sky-400 bg-sky-400/10 border border-sky-500/30',
    '익명톡': 'text-purple-400 bg-purple-400/10 border border-purple-500/30',
    '질문/해결': 'text-emerald-400 bg-emerald-400/10 border border-emerald-500/30',
    '설치 오류': 'text-rose-400 bg-rose-400/10 border border-rose-500/30',
  };

  return (
    <section className="bg-[#10131a] border border-[#424754]/50 rounded-2xl overflow-hidden shadow-xl">

      {/* ── 헤더 ── */}
      <div className="flex items-center justify-between bg-[#1d2027]/60 border-b border-[#424754]/40 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-white">💬 {appName} 실시간 커뮤니티</span>
          <span className="text-xs text-slate-400 font-normal">({posts.length}개)</span>
        </div>
        <Link
          href="/community/write"
          className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/40 px-3.5 py-2 rounded-xl shadow transition transform hover:-translate-y-0.5 flex items-center gap-1"
        >
          <span>✏️</span> 링크 첨부 글쓰기
        </Link>
      </div>

      {/* ── 카테고리 탭 ── */}
      <div className="flex gap-1 bg-[#10131a] border-b border-[#424754]/30 px-4 py-2 overflow-x-auto">
        {(['전체', '자유톡', '질문/해결', '설치 오류'] as const).map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── 게시글 피드 (이지데이 뷰어 링크 연결) ── */}
      <div className="divide-y divide-[#424754]/30 max-h-[550px] overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-14 text-slate-500">
            <p className="text-3xl mb-2">💬</p>
            <p className="text-sm">아직 작성된 이야기나 질문이 없습니다.</p>
            <Link href="/community/write" className="text-xs text-blue-400 hover:underline mt-2 inline-block font-semibold">
              → 첫 번째 톡 작성하러 가기
            </Link>
          </div>
        ) : (
          filtered.map((post, index) => (
            <article key={post.id} className="hover:bg-slate-800/20 transition group">
              <Link href={`/community/post/${post.id}`} className="flex gap-3 px-4 py-4">
                {/* 프로필 아이콘 */}
                <div className={`w-9 h-9 ${post.avatarColor || 'bg-blue-600'} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 shadow-sm`}>
                  {post.nickname ? post.nickname.charAt(0) : '익'}
                </div>

                {/* 본문 영역 */}
                <div className="flex-1 min-w-0">
                  {/* 상단 메타 */}
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition">
                      {post.title || post.content}
                    </span>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${categoryBadge[post.category] || 'bg-slate-700 text-slate-300'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 ml-auto">{getTimeAgo(post.createdAt)}</span>
                  </div>

                  {/* 본문 약식 */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-2 font-normal">
                    {post.content}
                  </p>

                  {/* 강조 CTA 링크 프리뷰 */}
                  {post.ctaText && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/30 px-2.5 py-1 rounded-lg font-bold mb-2">
                      <span>👉</span>
                      <span className="truncate max-w-xs">{post.ctaText}</span>
                    </div>
                  )}

                  {/* 하단 액션 */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>{post.nickname}</span>
                    <span>·</span>
                    <span>조회 {post.views || 1}</span>
                    {post.comments && post.comments.length > 0 && (
                      <span className="text-blue-400">댓글 {post.comments.length}</span>
                    )}
                    <button
                      type="button"
                      onClick={(e) => handleLike(post.id, e)}
                      className={`ml-auto flex items-center gap-1 transition ${
                        post.liked ? 'text-rose-400 font-bold' : 'hover:text-rose-400'
                      }`}
                    >
                      ❤️ {post.likes || 0}
                    </button>
                  </div>
                </div>

                {/* 순번 */}
                <span className="text-xs text-slate-600 font-mono shrink-0 mt-1">{String(filtered.length - index).padStart(2, '0')}</span>
              </Link>
            </article>
          ))
        )}
      </div>

      {/* ── 하단 글쓰기 탭 ── */}
      <div className="border-t border-[#424754]/40 bg-[#10131a] px-4 py-3">
        <Link
          href="/community/write"
          className="w-full flex items-center justify-between text-xs text-slate-400 hover:text-white bg-[#1d2027] hover:bg-[#272a31] border border-[#424754]/60 rounded-xl px-4 py-3 transition shadow-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">✍️</span>
            <span>{appName}에 관한 팁이나 질문, 링크를 작성해 보세요...</span>
          </div>
          <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-lg text-xs">
            글쓰기 →
          </span>
        </Link>
      </div>

    </section>
  );
}
