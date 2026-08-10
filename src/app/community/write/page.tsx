'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { addPost } from '@/lib/postsStore';

const ADJECTIVES = ['행복한', '친절한', '날렵한', '똑똑한', '귀여운', '심각한', '신비로운', '빛나는', '피곤한', '배고픈', '열정적인', '즐거운'];
const NOUNS = ['칼무리', '안카메라', '챗GPT', '클로드', '윈도우', '맥북', '개발자', '자영업자', '대학생', '사자', '호랑이', '너구리'];
const AVATAR_COLORS = ['bg-rose-500', 'bg-violet-500', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-cyan-500', 'bg-fuchsia-500', 'bg-indigo-500'];

const APPS_LIST = [
  { id: 'claude-pc', name: 'Claude PC버전' },
  { id: 'kalmuri', name: '칼무리' },
  { id: 'ancamera-old', name: '안카메라 구버전' },
  { id: 'bandizip', name: '반디집' },
  { id: 'chatgpt-pc', name: 'ChatGPT' },
  { id: 'capcut-pc', name: 'CapCut PC' },
  { id: 'discord', name: '디스코드' },
  { id: 'general', name: '선택 안함 (일반 커뮤니티)' },
];

const ADMIN_SECRET_KEY = 'admin';

function WriteFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'자유톡' | '익명톡' | '질문/해결' | '설치 오류' | '육아톡' | '러브톡'>('자유톡');
  const [appId, setAppId] = useState('claude-pc');
  const [content, setContent] = useState('');

  // 🔒 운영자(본인) 전용 상태 - 기본적으로 일반 유저에게는 100% 숨김 처리
  const [showAdminSection, setShowAdminSection] = useState(false);
  const [hasCtaLink, setHasCtaLink] = useState(true);
  const [ctaText, setCtaText] = useState('👉 이번주 추천 정보 및 바로가기 확인');
  const [ctaUrl, setCtaUrl] = useState('https://software.weknews.com/app/claude-pc');

  const [nickname, setNickname] = useState('익명');
  const [avatarColor, setAvatarColor] = useState('bg-blue-600');
  const [password, setPassword] = useState('1234');
  const [isAnonymous, setIsAnonymous] = useState(true);

  useEffect(() => {
    generateNickname();

    // URL에 ?admin=true 또는 ?admin=1이 있거나, 이전에 관리자 인증을 완료한 내 브라우저인 경우에만 관리자 메뉴 표시
    const isAdminUrl = searchParams.get('admin') === 'true' || searchParams.get('admin') === '1';
    const isSavedAdmin = typeof window !== 'undefined' && localStorage.getItem('sv_is_admin_owner') === 'true';

    if (isAdminUrl || isSavedAdmin) {
      setShowAdminSection(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('sv_is_admin_owner', 'true');
      }
    }
  }, [searchParams]);

  const generateNickname = () => {
    const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    const num = Math.floor(100 + Math.random() * 900);
    const color = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
    setNickname(`${adj} ${noun} ${num}`);
    setAvatarColor(color);
  };

  // 상단 헤더 더블 클릭 시 관리자 모드 비밀 해제 (비밀키 입력)
  const handleSecretTrigger = () => {
    const inputKey = prompt('운영자 비밀키를 입력하세요:');
    if (inputKey && inputKey.toLowerCase() === ADMIN_SECRET_KEY) {
      setShowAdminSection(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('sv_is_admin_owner', 'true');
      }
      alert('✅ 운영자 모드가 활성화되었습니다. 내 브라우저에 강조 링크 첨부 기능이 표시됩니다.');
    } else if (inputKey) {
      alert('비밀키가 일치하지 않습니다.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !password.trim()) return;

    const selectedApp = APPS_LIST.find(a => a.id === appId);

    // 관리자(본인) 섹션이 열려있을 때만 CTA 배너 링크 첨부
    const finalCtaText = showAdminSection && hasCtaLink && ctaText.trim() ? ctaText.trim() : undefined;
    const finalCtaUrl = showAdminSection && hasCtaLink && ctaUrl.trim() ? ctaUrl.trim() : undefined;

    const created = addPost({
      title: title.trim(),
      appId: appId,
      appName: selectedApp ? selectedApp.name : 'Software Vault',
      nickname: isAnonymous ? '익명' : nickname,
      avatarColor: avatarColor,
      category: category,
      content: content.trim(),
      ctaText: finalCtaText,
      ctaUrl: finalCtaUrl,
      passwordHash: password.trim(),
    });

    router.push(`/community/post/${created.id}`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">

      {/* 서브 상단 네비게이션 (더블 클릭 시 운영자 비밀 해제) */}
      <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-6 select-none">
        <div className="flex items-center gap-2">
          <Link href="/community" className="text-xs text-slate-400 hover:text-slate-200 transition">
            ← 커뮤니티 목록으로
          </Link>
          <span className="text-slate-600">|</span>
          <span
            onDoubleClick={handleSecretTrigger}
            title="운영자 모드 활성화 (더블클릭)"
            className="text-sm font-bold text-white cursor-pointer hover:text-blue-300 transition"
          >
            ✏️ 새 글 쓰기
          </span>
        </div>
        {showAdminSection && (
          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
            👑 운영자 전용 링킹 켜짐
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-[#10131a] border border-[#424754]/50 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">

        {/* 1. 카테고리 & 관련 앱 선택 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#adc6ff] uppercase tracking-wider mb-2">
              게시판 카테고리
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full bg-[#1d2027] border border-[#424754] text-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="자유톡">☕ 자유톡</option>
              <option value="익명톡">👤 익명톡</option>
              <option value="질문/해결">💡 질문/해결</option>
              <option value="설치 오류">🛠️ 설치 오류</option>
              <option value="육아톡">👶 육아톡</option>
              <option value="러브톡">💬 러브톡</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#adc6ff] uppercase tracking-wider mb-2">
              관련 소프트웨어/앱 (선택)
            </label>
            <select
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              className="w-full bg-[#1d2027] border border-[#424754] text-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              {APPS_LIST.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 2. 글 제목 */}
        <div>
          <label className="block text-xs font-bold text-[#adc6ff] uppercase tracking-wider mb-2">
            게시글 제목 *
          </label>
          <input
            type="text"
            placeholder="예: 지역난방공사 주가 전망 및 목표주가 확인하기"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#1d2027] border border-[#424754] text-slate-200 text-sm md:text-base font-medium rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 placeholder-slate-500"
            required
          />
        </div>

        {/* 3. 본문 내용 */}
        <div>
          <label className="block text-xs font-bold text-[#adc6ff] uppercase tracking-wider mb-2">
            본문 내용 *
          </label>
          <textarea
            placeholder={`내용을 입력해주세요. (최소 3줄 이상 권장)\n\n예:\n버튼을 누르면 관련 정보와 시나리오를 확인할 수 있습니다.\n확인된 자료를 조건별로 정리하여 안내해 드립니다.`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-[#1d2027] border border-[#424754] text-slate-200 text-sm rounded-xl p-4 min-h-[220px] focus:outline-none focus:border-blue-500 placeholder-slate-500 resize-y leading-relaxed"
            required
          />
        </div>

        {/* 4. 👑 운영자(본인) 전용 바로가기 배너 링크 첨부 섹션 - 일반 유저에게는 100% 숨김 */}
        {showAdminSection && (
          <div className="bg-[#1d2027]/80 border border-blue-500/40 rounded-2xl p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-blue-400 flex items-center gap-2">
                <span>👉</span> 강조 바로가기 배너 링크 첨부 (운영자 전용)
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasCtaLink}
                  onChange={(e) => setHasCtaLink(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {hasCtaLink && (
              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">배너 버튼 문구 (손가락 이모지와 함께 큼직하게 표시됩니다)</span>
                  <input
                    type="text"
                    placeholder="👉 이번주 상승종목 및 목표주가 바로보기"
                    value={ctaText}
                    onChange={(e) => setCtaText(e.target.value)}
                    className="w-full bg-[#10131a] border border-[#424754] text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-1">이동할 URL 주소</span>
                  <input
                    type="url"
                    placeholder="https://software.weknews.com/app/claude-pc"
                    value={ctaUrl}
                    onChange={(e) => setCtaUrl(e.target.value)}
                    className="w-full bg-[#10131a] border border-[#424754] text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500 font-mono text-xs"
                  />
                </div>

                {/* 실시간 이지데이 배너 프리뷰 */}
                <div className="mt-3 p-3 bg-slate-900/80 rounded-xl border border-slate-700/50">
                  <span className="text-[11px] text-slate-500 block mb-2 font-medium">[이지데이 미리보기]</span>
                  <div className="bg-[#1A2536] hover:bg-[#202E43] text-white border border-blue-500/40 rounded-xl py-3 px-6 text-center font-bold text-sm shadow-md transition">
                    {ctaText || '👉 바로가기 버튼'}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. 작성자 및 비밀번호 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-700/40 pt-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#adc6ff] uppercase tracking-wider">
                작성자 닉네임
              </label>
              <label className="text-xs text-slate-400 flex items-center gap-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                '익명'으로 표시
              </label>
            </div>
            {!isAnonymous ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="flex-1 bg-[#1d2027] border border-[#424754] text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={generateNickname}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2.5 rounded-xl border border-slate-700 transition"
                >
                  🔄 랜덤
                </button>
              </div>
            ) : (
              <div className="bg-[#1d2027] text-slate-400 text-sm rounded-xl px-4 py-2.5 border border-[#424754]/50">
                익명 (이지데이 기본 설정)
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#adc6ff] uppercase tracking-wider mb-2">
              삭제용 비밀번호 (필수)
            </label>
            <input
              type="password"
              placeholder="숫자 4자리"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={12}
              className="w-full bg-[#1d2027] border border-[#424754] text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-700/40">
          <Link
            href="/community"
            className="px-6 py-3 text-sm font-semibold text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 rounded-xl border border-slate-700 transition"
          >
            취소
          </Link>
          <button
            type="submit"
            className="px-8 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg hover:shadow-blue-500/25 transition transform hover:-translate-y-0.5"
          >
            등록 완료
          </button>
        </div>

      </form>
    </div>
  );
}

export default function CommunityWritePage() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-slate-400">로딩 중...</div>}>
      <WriteFormContent />
    </Suspense>
  );
}
