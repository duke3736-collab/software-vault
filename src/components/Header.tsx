'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="font-semibold text-xl tracking-tight text-white">Software Vault</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-blue-400 transition text-blue-400">🔥 추천 앱</Link>
          <a href="https://drive.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">🚗 드라이브 코스</a>
          <a href="https://map.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">🏖️ 씨맵(PlayMap)</a>
          <a href="https://tools.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">📊 핀인사이트</a>
          <a href="https://mystic.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition">🔮 미스틱사주</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-400 hover:text-white transition p-2"
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
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0F172A] absolute w-full left-0 top-16 shadow-xl">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-slate-300">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-400 transition text-blue-400 py-3 border-b border-slate-800">🔥 추천 앱</Link>
            <a href="https://drive.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition py-3 border-b border-slate-800">🚗 드라이브 코스</a>
            <a href="https://map.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition py-3 border-b border-slate-800">🏖️ 씨맵(PlayMap)</a>
            <a href="https://tools.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition py-3 border-b border-slate-800">📊 핀인사이트</a>
            <a href="https://mystic.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition py-3">🔮 미스틱사주</a>
          </nav>
        </div>
      )}
    </header>
  );
}
