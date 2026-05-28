import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
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
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HXGF6RRRQT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HXGF6RRRQT');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[#090E17] text-slate-200 min-h-screen flex flex-col`}>
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8 min-h-screen">
          {children}
          <ShareButton />
          <PromotionBanners />
        </main>
        <footer className="bg-[#090E17] border-t border-slate-800 mt-12 py-10">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-slate-500">
            <p>© 2026 Software Vault. 모든 소프트웨어의 저작권은 해당 개발사에게 있습니다.</p>
            <p className="mt-2">본 사이트는 공식 홈페이지가 아니며, 안전하게 검증된 공식 다운로드 링크만을 중개합니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
