'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredPosts, getPostById, incrementViews, addComment, PostItem } from '@/lib/postsStore';
import AdSense from '@/components/AdSense';

const EZDAY_NAV_SECTIONS = [
  {
    title: '꿈해몽',
    items: ['꿈해몽톡', '주제별꿈풀이'],
  },
  {
    title: '재미로 보는 시리즈',
    items: ['사주풀이', '이름추천'],
  },
  {
    title: '모두톡',
    items: ['자유톡', '익명톡', '여자끼리톡', '유머톡', '좋은글', '생활상식', '스포츠동아뉴스', '국제뉴스', '스타일톡', '여행톡'],
  },
  {
    title: '육아톡',
    items: ['육아톡', '아기를 기다려요', '난임 이겨내기', '임신에서 출산', '육아Q&A', '학부모톡'],
  },
  {
    title: '러브톡',
    items: ['만남과 이별', '사랑과 전쟁', '나의 남편,남친', '시집 VS 친정', '결혼을 앞두고', '솔직담백 性이야기19', '이혼하고 싶어요19', '불륜과 로맨스19'],
  },
];

export default function PostDetailClient({ postId, initialPost }: { postId: string; initialPost?: PostItem }) {
  const [post, setPost] = useState<PostItem | null>(initialPost || null);
  const [allPosts, setAllPosts] = useState<PostItem[]>([]);
  const [commentContent, setCommentContent] = useState('');
  const [commentPassword, setCommentPassword] = useState('1234');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // 1. 조회수 1 누적 증가 (세션당 1회씩 실시간 누적)
    const viewKey = `sv_viewed_session_${postId}`;
    if (typeof window !== 'undefined' && !sessionStorage.getItem(viewKey)) {
      incrementViews(postId);
      sessionStorage.setItem(viewKey, 'true');
    }
    
    // 2. 게시글 로드
    const found = getPostById(postId);
    if (found) {
      setPost({ ...found });
    }
    setAllPosts(getStoredPosts());
  }, [postId]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent.trim()) return;
    if (!commentPassword.trim()) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    const updated = addComment(postId, {
      nickname: '익명',
      avatarColor: 'bg-[#10131a]',
      content: commentContent.trim(),
      passwordHash: commentPassword.trim(),
    });

    if (updated) {
      setPost({ ...updated });
      setCommentContent('');
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center text-slate-400">
        <p className="text-xl mb-4">게시글을 찾을 수 없습니다.</p>
        <Link href="/community" className="text-blue-400 underline">
          커뮤니티 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  // 이전글 / 다음글 찾기
  const currentIndex = allPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 flex gap-6 text-[#e1e2ec]">

      {/* ── 1. 이지데이 좌측 카테고리 사이드바 ── */}
      <aside className="hidden lg:block w-48 shrink-0 bg-[#10131a] border border-[#424754]/40 rounded-xl p-4 self-start text-xs space-y-5 shadow-md">
        {EZDAY_NAV_SECTIONS.map((sec) => (
          <div key={sec.title} className="border-b border-[#424754]/30 pb-3 last:border-0">
            <h3 className="font-bold text-[#adc6ff] mb-2 text-xs">{sec.title}</h3>
            <ul className="space-y-1 text-[#c2c6d6]">
              {sec.items.map((item) => (
                <li key={item}>
                  <Link
                    href="/community"
                    className={`block hover:text-blue-400 transition ${
                      item === post.category ? 'text-blue-400 font-bold' : ''
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* ── 2. 메인 게시글 상세 영역 (이지데이 view_board) ── */}
      <div className="flex-1 min-w-0 bg-[#10131a] border border-[#424754]/50 rounded-2xl p-4 md:p-8 space-y-6 shadow-xl">

        {/* ── 상단 네비게이션 ── */}
        <div className="flex items-center justify-between text-xs text-[#8c909f] border-b border-[#424754]/30 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-400">{post.category}</span>
            <span>★ 즐겨찾기</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/community" className="hover:text-slate-200 transition">
              목록
            </Link>
            {nextPost && (
              <Link href={`/community/post/${nextPost.id}`} className="hover:text-slate-200 transition">
                다음 &gt;
              </Link>
            )}
          </div>
        </div>

        {/* ── 게시글 제목 및 메타 ── */}
        <div className="space-y-3">
          <h1 className="text-xl md:text-2xl font-bold text-white leading-snug break-words">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#8c909f] pt-1 pb-2 border-b border-[#424754]/40">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-300">{post.nickname}</span>
              <span>{post.createdAt}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>조회 <strong className="text-slate-300 font-normal">{post.views}</strong></span>
              <span>댓글 <strong className="text-slate-300 font-normal">{post.comments.length}</strong></span>
              <button onClick={() => alert('신고가 접수되었습니다.')} className="hover:text-red-400 transition">
                신고
              </button>
            </div>
          </div>
        </div>

        {/* ── 구글 애드센스 광고 영역 ── */}
        <AdSense slot="3763277922" />

        {/* ── 📌 게시글 본문 ── */}
        <div className="py-4 text-sm md:text-base leading-relaxed text-[#c2c6d6] space-y-6 font-normal">

          {/* 본문 문단 */}
          <div className="whitespace-pre-wrap break-words leading-relaxed space-y-4">
            {post.content}
          </div>

          {/* ── 🔗 이지데이 스타일 '👉 바로가기 강조 배너 버튼' ── */}
          {post.ctaText && (
            <div className="py-6">
              <a
                href={post.ctaUrl || '#'}
                target={post.ctaUrl?.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="block w-full max-w-2xl mx-auto bg-gradient-to-r from-[#1E293B] via-[#101927] to-[#1E293B] hover:from-[#253347] hover:to-[#253347] text-white border-2 border-blue-500/50 hover:border-blue-400 rounded-2xl py-4 px-6 text-center font-bold text-base md:text-lg shadow-xl transition-all transform hover:-translate-y-0.5 group"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="group-hover:scale-110 transition-transform">👉</span>
                  <span>{post.ctaText}</span>
                </div>
              </a>
            </div>
          )}

        </div>

        {/* ── 하단 반응 / 소셜 공유 링크 ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#8c909f] pt-4 border-t border-[#424754]/40">
          <div className="flex items-center gap-3">
            <button onClick={handleCopyLink} className="hover:text-white transition">
              {copied ? '✅ 주소복사됨' : '주소복사'}
            </button>
            <span>·</span>
            <button onClick={() => alert('관심글에 추가되었습니다.')} className="hover:text-white transition">
              관심글
            </button>
            <span>·</span>
            <button onClick={() => window.print()} className="hover:text-white transition">
              인쇄
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/community/write"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-md transition"
            >
              쓰기
            </Link>
            <Link
              href="/community"
              className="bg-[#1d2027] hover:bg-[#272a31] text-slate-300 px-3 py-1.5 rounded-md border border-[#424754] transition"
            >
              목록
            </Link>
            {prevPost && (
              <Link
                href={`/community/post/${prevPost.id}`}
                className="bg-[#1d2027] hover:bg-[#272a31] text-slate-300 px-3 py-1.5 rounded-md border border-[#424754] transition"
              >
                이전
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/community/post/${nextPost.id}`}
                className="bg-[#1d2027] hover:bg-[#272a31] text-slate-300 px-3 py-1.5 rounded-md border border-[#424754] transition"
              >
                다음
              </Link>
            )}
          </div>
        </div>

        {/* ── 💬 댓글 등록 영역 (댓글등록) ── */}
        <div className="bg-[#1d2027]/80 rounded-2xl p-5 border border-[#424754]/40 space-y-4 mt-8">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>💬 댓글등록</span>
            <span className="text-xs text-slate-400 font-normal">({post.comments.length})</span>
          </h3>

          <form onSubmit={handleCommentSubmit} className="space-y-3">
            <textarea
              placeholder="댓글을 입력해주세요. (익명으로 등록됩니다)"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              className="w-full bg-[#10131a] border border-[#424754] text-slate-200 text-sm rounded-xl p-3 min-h-[70px] focus:outline-none focus:border-blue-500 placeholder-slate-500 resize-none"
              required
            />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">작성자: <strong className="text-slate-200 font-normal">익명</strong></span>
                <input
                  type="password"
                  placeholder="삭제 비밀번호"
                  value={commentPassword}
                  onChange={(e) => setCommentPassword(e.target.value)}
                  className="bg-[#10131a] border border-[#424754] text-slate-200 text-xs rounded-lg px-2.5 py-1.5 w-32 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2 rounded-lg transition"
              >
                등록
              </button>
            </div>
          </form>

          {/* 댓글 목록 */}
          {post.comments.length > 0 && (
            <div className="divide-y divide-[#424754]/30 pt-2">
              {post.comments.map((c) => (
                <div key={c.id} className="py-3 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-slate-300">{c.nickname}</span>
                    <span>{c.createdAt}</span>
                  </div>
                  <p className="text-xs text-slate-200">{c.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── 📋 하단 최근 게시글 리스트 테이블 (이지데이 스타일) ── */}
        <div className="pt-6 border-t border-[#424754]/40 space-y-3">
          <h3 className="text-sm font-bold text-slate-300">📋 게시판 최신글 목록</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#424754]/60 text-slate-400">
                  <th className="py-2.5 px-3 font-semibold">제목</th>
                  <th className="py-2.5 px-3 font-semibold w-24">작성자</th>
                  <th className="py-2.5 px-3 font-semibold w-16 text-center">조회수</th>
                  <th className="py-2.5 px-3 font-semibold w-28 text-right">작성일</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#424754]/20 text-slate-300">
                {allPosts.slice(0, 8).map((item) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-800/30 transition cursor-pointer ${
                      item.id === post.id ? 'bg-blue-500/10 font-bold text-blue-300' : ''
                    }`}
                  >
                    <td className="py-2.5 px-3">
                      <Link href={`/community/post/${item.id}`} className="hover:text-blue-400 transition line-clamp-1">
                        {item.title}
                      </Link>
                    </td>
                    <td className="py-2.5 px-3 text-slate-400">{item.nickname}</td>
                    <td className="py-2.5 px-3 text-center text-slate-400">{item.views}</td>
                    <td className="py-2.5 px-3 text-right text-slate-500">{item.createdAt.split(' ')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
