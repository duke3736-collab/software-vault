import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import PromotionBanners from "@/components/PromotionBanners";
import ShareButton from "@/components/ShareButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "공식 소프트웨어 다운로드 센터 | 안전한 PC버전 설치",
  description: "클로드, 챗GPT, 캡컷 등 최신 필수 소프트웨어 PC버전을 가장 안전하고 빠르게 다운로드하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-[#f5f5f7] text-gray-900 antialiased`}>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-semibold text-xl tracking-tight">Software Vault</span>
            </Link>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition text-blue-600">🔥 추천 앱</Link>
              <a href="https://map.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition">🏖️ 씨맵(PlayMap)</a>
              <a href="https://tools.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">📊 핀인사이트</a>
              <a href="https://mystic.weknews.com" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-500 transition">🔮 미스틱사주</a>
            </nav>
            <div className="md:hidden flex items-center">
              <button className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8 min-h-screen">
          {children}
          <PromotionBanners />
        </main>
        <ShareButton />
        <footer className="bg-white border-t border-gray-200 mt-12 py-10">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>© 2026 Software Vault. 모든 소프트웨어의 저작권은 해당 개발사에게 있습니다.</p>
            <p className="mt-2">본 사이트는 공식 홈페이지가 아니며, 안전하게 검증된 공식 다운로드 링크만을 중개합니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
