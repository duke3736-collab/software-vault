import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://download.weknews.com';

  const apps = [
    '3dp-net', 'alcapture-old', 'anydesk', 'anysign4pc', 'autocad-student',
    'bandicam', 'bandizip', 'canon-scan', 'capcut-pc', 'chatgpt-pc',
    'chrome-offline', 'claude-pc', 'davinci', 'discord', 'hwp-viewer',
    'kakaotalk', 'logitech-g-hub', 'notion', 'obs-studio', 'roblox-fps-unlocker',
    'teamviewer', 'v3-lite', 'gomrecorder-old', 'ancamera-old', 'picpick',
    'kalmuri'
  ];

  const appUrls = apps.map((app) => ({
    url: `${baseUrl}/app/${app}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...appUrls,
  ];
}
