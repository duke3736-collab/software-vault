import { NextResponse } from "next/server";

function stripHtmlTags(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&#038;/g, "&")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .trim();
}

export async function GET() {
  try {
    const wordpressUrl = "https://weknews.com/wp-json/wp/v2/posts?_embed&per_page=3";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(wordpressUrl, {
      signal: controller.signal,
      next: { revalidate: 300 }, // 5분 캐싱
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts = await response.json();

    const formatted = posts.map((post: any) => {
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
      const imageUrl =
        featuredMedia?.source_url ||
        featuredMedia?.media_details?.sizes?.medium?.source_url ||
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60";

      const categoryName = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "생활 꿀팁";

      return {
        id: post.id,
        title: stripHtmlTags(post.title?.rendered || "새로운 소식"),
        excerpt: stripHtmlTags(post.excerpt?.rendered || "자세한 내용을 확인해 보세요."),
        category: categoryName,
        date: post.date ? post.date.split("T")[0] : new Date().toISOString().split("T")[0],
        imageUrl: imageUrl,
        link: post.link || `https://weknews.com/?p=${post.id}`,
      };
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("WordPress API fetch error:", error);
    // 오류 발생 시 기본 최신 칼럼 3개 제공 (페이지가 깨지지 않도록)
    return NextResponse.json([
      {
        id: 101,
        title: "2026 KGMA 총정리 | 라인업·MC·티켓예매·투표·중계·타임테이블",
        excerpt: "제3회 KGMA 2026 - 11.7~8 고척스카이돔 MC 신동엽·설인아... 라인업 및 티켓 예매 일정 안내.",
        category: "톡톡 이벤트",
        date: "2026-08-10",
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60",
        link: "https://weknews.com",
      },
      {
        id: 102,
        title: "영문운전면허증 발급 방법 총정리 | 비용·기간·준비물·당일발급",
        excerpt: "2026년 최신 기준 69개국 사용 가능. 영문운전면허증 발급·재발급·준비물 및 소요 시간 안내.",
        category: "생활 정보",
        date: "2026-08-10",
        imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&auto=format&fit=crop&q=60",
        link: "https://weknews.com",
      },
      {
        id: 103,
        title: "런닝맨 레전드 회차 총정리 | 년도별 추천·이광수·전소민 다시보기",
        excerpt: "SBS 일요일 레전드 예능 런닝맨 회차 추천. 유재석·이광수 다시보기 방송 총정리.",
        category: "방송/엔터",
        date: "2026-08-10",
        imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format&fit=crop&q=60",
        link: "https://weknews.com",
      },
    ]);
  }
}
