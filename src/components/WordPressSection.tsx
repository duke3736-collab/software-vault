'use client';

import { useState, useEffect } from 'react';

export interface WordPressPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  link: string;
}

export default function WordPressSection() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWpPosts() {
      try {
        const res = await fetch('/api/wordpress');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setPosts(data.slice(0, 3));
          }
        }
      } catch (err) {
        console.error('Failed to load WordPress posts:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchWpPosts();
  }, []);

  return (
    <section className="my-10 max-w-5xl mx-auto px-4">
      {/* 타이틀 및 블로그 전체보기 버튼 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span>💡</span> 오늘의 핫한 생활 꿀팁 & 혜택 정보 <span>💡</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            정부 지원금 신청 정보부터 실시간 생활 꿀팁까지! 알아두면 유용한 최신 정보를 확인해 보세요.
          </p>
        </div>
        <a
          href="https://weknews.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2 rounded-xl transition self-start md:self-auto shrink-0"
        >
          <span>블로그 전체보기</span>
          <span>↗</span>
        </a>
      </div>

      {/* 3개 최신 포스트 카드리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {loading ? (
          // 로딩 스켈레톤 3개
          [1, 2, 3].map((i) => (
            <div key={i} className="bg-[#1d2027] border border-[#424754]/40 rounded-2xl overflow-hidden animate-pulse">
              <div className="aspect-[16/10] bg-slate-800" />
              <div className="p-5 space-y-3">
                <div className="h-3 bg-slate-800 rounded w-1/3" />
                <div className="h-5 bg-slate-800 rounded w-full" />
                <div className="h-10 bg-slate-800 rounded w-full" />
              </div>
            </div>
          ))
        ) : (
          posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[#1d2027] hover:bg-[#252a35] border border-[#424754]/50 hover:border-emerald-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* 이미지 및 카테고리 뱃지 */}
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  {post.category}
                </span>
              </div>

              {/* 텍스트 내용 */}
              <div className="flex-1 p-5 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="text-[11px] text-slate-500 font-mono block">{post.date}</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-100 group-hover:text-emerald-400 leading-snug line-clamp-2 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                {/* 하단 자세히 읽기 버튼 */}
                <div className="pt-3 border-t border-[#424754]/30 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span>자세히 읽기</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
}
