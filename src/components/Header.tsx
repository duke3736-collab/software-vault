'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: '🔥 추천 앱' },
  { href: '/community', label: '💬 커뮤니티' },
  { href: 'https://drive.weknews.com', label: '🚗 드라이브 코스', external: true },
  { href: 'https://map.weknews.com', label: '🏖️ 씨맵', external: true },
  { href: 'https://tools.weknews.com', label: '📊 핀인사이트', external: true },
  { href: 'https://mystic.weknews.com', label: '🔮 미스틱사주', external: true },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#424754]/30"
      style={{ backgroundColor: 'rgba(9, 14, 23, 0.92)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-8">

        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
            S
          </div>
          <span className="font-bold text-lg tracking-tight text-[#e1e2ec]">Software Vault</span>
        </Link>

        {/* 데스크탑 내비 */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {NAV_LINKS.map(link => {
            const isActive = !link.external && pathname === link.href;
            if (link.external) {
              return (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[#8c909f] hover:text-[#c2c6d6] transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.href} href={link.href}
                className={`text-sm transition-colors px-3 py-1.5 rounded-lg ${
                  isActive
                    ? 'text-[#adc6ff] bg-blue-500/10 font-semibold'
                    : 'text-[#8c909f] hover:text-[#c2c6d6] hover:bg-white/5'
                }`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#8c909f] hover:text-[#e1e2ec] p-2 transition-colors"
          aria-label="메뉴 열기"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full top-16 left-0 border-t border-[#424754]/30 shadow-2xl"
          style={{ backgroundColor: 'rgba(9, 14, 23, 0.98)' }}>
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map(link => {
              const isActive = !link.external && pathname === link.href;
              if (link.external) {
                return (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-[#8c909f] hover:text-[#c2c6d6] py-3 px-3 rounded-lg hover:bg-white/5 transition-colors border-b border-[#424754]/20 last:border-0">
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.href} href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm py-3 px-3 rounded-lg transition-colors border-b border-[#424754]/20 last:border-0 ${
                    isActive ? 'text-[#adc6ff] font-semibold' : 'text-[#8c909f] hover:text-[#c2c6d6] hover:bg-white/5'
                  }`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
