import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Yeti', // 네이버 검색 서치어드바이저 봇
        allow: '/',
      },
      {
        userAgent: 'Googlebot', // 구글 서치콘솔 봇
        allow: '/',
      },
    ],
    sitemap: 'https://software.weknews.com/sitemap.xml',
  };
}
