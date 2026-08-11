import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import PromotionBanners from "@/components/PromotionBanners";
import ShareButton from "@/components/ShareButton";
import WordPressSection from "@/components/WordPressSection";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Software Vault | 공식 PC 소프트웨어 다운로드 & 커뮤니티",
  description: "클로드(Claude), 챗GPT(ChatGPT), 칼무리, 반디집 등 필수 PC 소프트웨어를 안전하게 다운로드하고 유저들과 자유롭게 정보를 나누세요.",
  keywords: "소프트웨어 다운로드, PC버전 설치, 챗GPT PC, 클로드 PC버전, 캡컷 다운로드, 공식 다운로드, 무료 소프트웨어, 커뮤니티, 자유톡",
  alternates: {
    canonical: "https://software.weknews.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Software Vault - PC 소프트웨어 다운로드 & 커뮤니티",
    description: "필수 소프트웨어 공식 링크를 한곳에서. 유저들의 팁과 오류 해결법도 함께.",
    url: "https://software.weknews.com",
    siteName: "Software Vault",
    locale: "ko_KR",
    type: "website",
  }
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
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6635245275061755"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Software Vault - 공식 소프트웨어 다운로드 센터",
              "url": "https://software.weknews.com",
              "description": "클로드, 챗GPT, 캡컷 등 필수 소프트웨어 PC버전을 가장 안전하고 빠르게 다운로드하세요.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://software.weknews.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${hanken.className} min-h-screen flex flex-col`} style={{ backgroundColor: '#090E17', color: '#e1e2ec' }}>
        <Header />
        <main className="flex-1 py-6">
          {children}
          <ShareButton />
          <WordPressSection />
          <PromotionBanners />
        </main>
        <footer style={{ backgroundColor: '#0b0e15', borderTop: '1px solid rgba(66,71,84,0.4)' }} className="mt-16 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="font-bold text-[#e1e2ec] mb-1">Software Vault</p>
                <p className="text-sm text-[#8c909f]">© 2026 Software Vault. 모든 소프트웨어의 저작권은 해당 개발사에게 있습니다.</p>
              </div>
              <p className="text-xs text-[#8c909f]">본 사이트는 공식 홈페이지가 아니며, 안전하게 검증된 공식 다운로드 링크만을 중개합니다.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
