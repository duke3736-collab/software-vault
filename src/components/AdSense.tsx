'use client';
import { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
}

export default function AdSense({ slot, format = 'auto', responsive = true }: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6 overflow-hidden">
      {/* 구글 애드센스 실제 코드가 들어갈 자리 */}
      <ins
        className="adsbygoogle bg-gray-50 flex items-center justify-center text-sm text-gray-400 border border-dashed border-gray-200 rounded-lg min-h-[90px] w-full"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6635245275061755"
        data-ad-slot="3763277922"
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      >
        [구글 애드센스 광고 영역]
      </ins>
    </div>
  );
}
