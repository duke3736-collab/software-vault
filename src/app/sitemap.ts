import { MetadataRoute } from 'next';
import { DEMO_POSTS_STORE } from '@/lib/postsStore';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://software.weknews.com';

  const apps = [
    'deepseek-pc', 'potplayer', 'honeyview', 'everything-search', 'ldplayer',
    '3dp-net', 'alcapture-old', 'anydesk', 'anysign4pc', 'autocad-student',
    'bandicam', 'bandizip', 'canon-scan', 'capcut-pc', 'chatgpt-pc',
    'chrome-offline', 'claude-pc', 'davinci', 'discord', 'hwp-viewer',
    'kakaotalk', 'logitech-g-hub', 'notion', 'obs-studio', 'roblox-fps-unlocker',
    'teamviewer', 'v3-lite', 'gomrecorder-old', 'ancamera-old', 'picpick',
    'kalmuri'
  ];

  // 1. 앱 상세 페이지 URL 목록
  const appUrls = apps.map((app) => ({
    url: `${baseUrl}/app/${app}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 2. 구글 및 네이버 수집용 커뮤니티 게시글 URL 목록
  const communityPostUrls = DEMO_POSTS_STORE.map((post) => ({
    url: `${baseUrl}/community/post/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...appUrls,
    ...communityPostUrls,
  ];
}
