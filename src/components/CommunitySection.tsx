'use client';

import { useState, useEffect, useRef } from 'react';

// 랜덤 닉네임 생성용 데이터
const ADJECTIVES = ['행복한', '친절한', '날렵한', '똑똑한', '귀여운', '심각한', '신비로운', '빛나는', '피곤한', '배고픈', '열정적인', '즐거운'];
const NOUNS = ['칼무리', '안카메라', '챗GPT', '클로드', '윈도우', '맥북', '개발자', '자영업자', '대학생', '사자', '호랑이', '너구리'];

// 닉네임 색상 팔레트 (이지데이 스타일 프로필 아이콘)
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

interface CommunitySectionProps {
  appId: string;
  appName: string;
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
  return then.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });
}

export default function CommunitySection({ appId, appName }: CommunitySectionProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState<'자유톡' | '질문/해결' | '설치 오류'>('자유톡');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'전체' | '자유톡' | '질문/해결' | '설치 오류'>('전체');
  const [nickname, setNickname] = useState('');
  const [avatarColor, setAvatarColor] = useState('bg-violet-500');
  const [showWriteBox, setShowWriteBox] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    generateRandomNickname();
    const savedPosts = localStorage.getItem(`sv_community_posts_${appId}`);
    if (savedPosts) {
      try { setPosts(JSON.parse(savedPosts)); } catch {}
    }
  }, [appId]);

  const generateRandomNickname = () => {
    const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    const num = Math.floor(100 + Math.random() * 900);
    const color = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
    setNickname(`${adj} ${noun} ${num}`);
    setAvatarColor(color);
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !password.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      appId,
      nickname,
      avatarColor,
      category,
      content: content.trim(),
      passwordHash: password,
      createdAt: new Date().toISOString(),
      likes: 0,
      liked: false,
    };

    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem(`sv_community_posts_${appId}`, JSON.stringify(updated));
    setContent('');
    setPassword('');
    setShowWriteBox(false);
    generateRandomNickname();
  };

  const handleLike = (postId: string) => {
    const updated = posts.map(p =>
      p.id === postId
        ? { ...p, likes: p.liked ? p.likes - 1 : p.likes + 1, liked: !p.liked }
        : p
    );
    setPosts(updated);
    localStorage.setItem(`sv_community_posts_${appId}`, JSON.stringify(updated));
  };

  const handleDelete = (postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    const pw = prompt('삭제하려면 작성 시 입력했던 비밀번호를 입력하세요:');
    if (pw === null) return;
    if (pw === post.passwordHash) {
      const updated = posts.filter(p => p.id !== postId);
      setPosts(updated);
      localStorage.setItem(`sv_community_posts_${appId}`, JSON.stringify(updated));
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const filtered = activeTab === '전체' ? posts : posts.filter(p => p.category === activeTab);
  const totalCount = posts.length;

  const categoryBadge: Record<string, string> = {
    '자유톡': 'text-sky-400 bg-sky-400/10 border-sky-500/30',
    '질문/해결': 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    '설치 오류': 'text-rose-400 bg-rose-400/10 border-rose-500/30',
  };

  return (
    <section className="border border-slate-700/60 rounded-2xl overflow-hidden">

      {/* ── 헤더 ── */}
      <div className="flex items-center justify-between bg-slate-800/60 border-b border-slate-700/60 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-white">💬 자유톡</span>
          <span className="text-xs text-slate-400 font-medium bg-slate-700/70 px-2 py-0.5 rounded-full">
            {appName}
          </span>
          <span className="text-xs text-slate-500">총 {totalCount}개</span>
        </div>
        <button
          onClick={() => { setShowWriteBox(v => !v); setTimeout(() => textareaRef.current?.focus(), 80); }}
          type="button"
          className="text-xs font-bold text-blue-400 border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 px-3 py-1.5 rounded-lg transition"
        >
          ✏️ 글쓰기
        </button>
      </div>

      {/* ── 카테고리 탭 ── */}
      <div className="flex gap-1 bg-slate-900/40 border-b border-slate-700/40 px-4 py-2 overflow-x-auto">
        {(['전체', '자유톡', '질문/해결', '설치 오류'] as const).map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-md transition whitespace-nowrap ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── 글쓰기 폼 (토글) ── */}
      {showWriteBox && (
        <div className="bg-slate-800/50 border-b border-slate-700/40 p-4">
          <form onSubmit={handlePostSubmit} className="space-y-3">
            {/* 내 닉네임 프리뷰 */}
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-8 h-8 ${avatarColor} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                {nickname.charAt(0)}
              </div>
              <span className="text-slate-200 font-semibold">{nickname}</span>
              <button onClick={generateRandomNickname} type="button" className="text-slate-500 hover:text-slate-300 text-xs ml-1 transition">🔄 닉네임 변경</button>
            </div>

            {/* 카테고리 + 비밀번호 */}
            <div className="flex flex-wrap gap-2">
              <select
                value={category}
                onChange={e => setCategory(e.target.value as any)}
                className="bg-slate-900 border border-slate-600 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="자유톡">자유톡</option>
                <option value="질문/해결">질문/해결</option>
                <option value="설치 오류">설치 오류</option>
              </select>
              <input
                type="password"
                placeholder="삭제 비밀번호 (4자리 이상)"
                value={password}
                onChange={e => setPassword(e.target.value)}
                maxLength={12}
                required
                className="bg-slate-900 border border-slate-600 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 w-44 placeholder-slate-500"
              />
            </div>

            {/* 본문 textarea */}
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder={`${appName}에 대한 팁, 질문, 오류 해결법을 자유롭게 공유해 주세요.`}
                required
                className="w-full bg-slate-900/80 border border-slate-600 text-slate-200 text-sm rounded-xl p-3 min-h-[90px] focus:outline-none focus:border-blue-500 placeholder-slate-500 resize-none"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowWriteBox(false)}
                className="text-xs text-slate-400 hover:text-slate-200 px-4 py-2 rounded-lg border border-slate-700 transition"
              >
                취소
              </button>
              <button
                type="submit"
                className="text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition shadow"
              >
                등록
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── 게시글 피드 ── */}
      <div className="divide-y divide-slate-700/30 max-h-[600px] overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <p className="text-3xl mb-3">💬</p>
            <p className="text-sm font-medium">아직 작성된 글이 없습니다.</p>
            <p className="text-xs mt-1 text-slate-600">첫 번째 톡의 주인공이 되어보세요!</p>
          </div>
        ) : (
          filtered.map((post, index) => (
            <article key={post.id} className="flex gap-3 px-4 py-4 hover:bg-slate-800/20 transition group">
              {/* 프로필 아이콘 */}
              <div className={`w-9 h-9 ${post.avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5 shadow-sm`}>
                {post.nickname.charAt(0)}
              </div>

              {/* 본문 영역 */}
              <div className="flex-1 min-w-0">
                {/* 상단 메타 */}
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-sm font-bold text-slate-200">{post.nickname}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryBadge[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 ml-auto">{getTimeAgo(post.createdAt)}</span>
                </div>

                {/* 내용 */}
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap break-words">{post.content}</p>

                {/* 하단 액션 */}
                <div className="flex items-center gap-4 mt-3">
                  <button
                    type="button"
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1.5 text-xs font-medium transition ${
                      post.liked
                        ? 'text-rose-400'
                        : 'text-slate-500 hover:text-rose-400'
                    }`}
                  >
                    <svg className="w-4 h-4" fill={post.liked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    공감 {post.likes > 0 && <span>{post.likes}</span>}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(post.id)}
                    className="text-xs text-slate-600 hover:text-red-400 transition ml-auto opacity-0 group-hover:opacity-100"
                  >
                    삭제
                  </button>
                </div>
              </div>

              {/* 순번 (이지데이 스타일) */}
              <span className="text-xs text-slate-600 font-mono shrink-0 mt-1">{String(filtered.length - index).padStart(2, '0')}</span>
            </article>
          ))
        )}
      </div>

      {/* ── 하단 인라인 글쓰기 버튼 ── */}
      {!showWriteBox && (
        <div className="border-t border-slate-700/40 bg-slate-900/30 px-4 py-3">
          <button
            type="button"
            onClick={() => { setShowWriteBox(true); setTimeout(() => textareaRef.current?.focus(), 80); }}
            className="w-full flex items-center gap-3 text-sm text-slate-500 hover:text-slate-300 bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 rounded-xl px-4 py-3 transition text-left"
          >
            <div className={`w-7 h-7 ${avatarColor} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {nickname.charAt(0)}
            </div>
            <span>{nickname}님, 자유롭게 이야기해 주세요...</span>
          </button>
        </div>
      )}
    </section>
  );
}
